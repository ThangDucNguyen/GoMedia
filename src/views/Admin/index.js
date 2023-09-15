import {
  DeleteOutlined,
  EditOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Divider, Layout, Select, Table } from "antd";
import Proptypes from "prop-types";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { adminActions, adminSelectors } from "reduxResources/admin";
import { createStructuredSelector } from "reselect";
import { ADMIN_SERVICE_API } from "../../appConstants";
import { Box, Flex ,PageHeader} from "../../em-web-ui/components/base/index";
import { REF_TABLES } from "./constants/TableName";
import { COLUMNS_DEFS } from "../_Shared/constants";

const { Content, Footer, Sider } = Layout;

class AdminContainer extends PureComponent {
  static propTypes = {
    requestAdmin: Proptypes.func.isRequired,
    admin: Proptypes.array.isRequired,
  };

  state = { visible: false, table: null };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.table !== this.state.table) {
      this.props.requestAdmin(this.state.table)
    }
  }

  render() {
    const { admin } = this.props;
    
    const onChange = (value) => {
      if(!!value)
      this.setState({
        table: value,
      });
    };

    return (
      <Layout>
        <PageHeader></PageHeader>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: "24px 0" }}>
            {/* <Sider theme="light" width={200}></Sider> */}
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Flex flex={1} justifyContent="flex-start">
                <Box p={2} style={{ color: "red" }}>
                  Please ensure what is impacted by your change
                </Box>
              </Flex>
              <Flex flex={1} justifyContent="flex-start">
                <Box p={2} mr={2}>
                  <WindowsOutlined />
                  Ref Table
                </Box>
                <Select
                  title="Ref Table"
                  placeholder="Select Ref Table"
                  optionFilterProp="children"
                  onChange={onChange}
                  options={REF_TABLES}
                />
              </Flex>

              <Table
                loading={this.props.isLoading}
                columns={COLUMNS_DEFS[this.state.table || "REF_LEADS"]}
                dataSource={admin ? admin.toJS() : []}
              />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>Copyrights GoMedia</Footer>
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  admin: adminSelectors.items,
  isLoading: adminSelectors.isLoadingItems,
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestAdmin: (value) => {
      dispatch(
        adminActions.adminGetAllAjax({
          url: `${ADMIN_SERVICE_API}/${value}`,
        })
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
