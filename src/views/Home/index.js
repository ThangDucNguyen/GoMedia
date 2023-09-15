import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Divider, Layout, Table, Tabs } from "antd";
import Proptypes from "prop-types";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { usersActions, usersSelectors } from "reduxResources/users";
import { authSelectors } from "reduxResources/auth";
import { createStructuredSelector } from "reselect";
import { SERVICE_API } from "../../appConstants";
import { Box, Flex, PageHeader } from "../../em-web-ui/components/base/index";
import ConfirmModal from "./component/DeleteModal";
import CustomSidebar from "./component/CustomSidebar";
import { COLUMNS_DEFS } from "../_Shared/constants";
import { filter } from "lodash"
import { PATHS } from "../../appConstants";

const { Content } = Layout;
const { TabPane } = Tabs;

class HomeContainer extends PureComponent {
  static propTypes = {
    requestUser: Proptypes.func.isRequired,
    users: Proptypes.array.isRequired,
    auth: Proptypes.array.isRequired,
  };

  state = { visible: false ,userInfo: {}};

  componentDidMount() {
    this.props.requestUser();
    this.state.userInfo = localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")) : {}
  }

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

  render() {
    const { users :rawData} = this.props;
    const { userInfo} = this.state;
    
    const { id } = userInfo ||{}

    const columns = [
      ...COLUMNS_DEFS["REF_LEADS"],
      {
        title: "Actions",
        key: "action",
        render: (_text, record) => {
          return (
            <span>
              <Flex>
                <Box>
                  <Link to={`/lead/edit/${record.id}`}>
                    <EditOutlined />
                  </Link>
                </Box>
                <Divider type="vertical" />
                <Box
                  onClick={() => ConfirmModal(record, this.props.deleteUser)}
                >
                  <DeleteOutlined />
                </Box>
              </Flex>
            </span>
          );
        },
      },
    ];
    const users = rawData ? rawData.toJS() : [] 
    const mappedUser = filter(users,(item)=>
      item.created_by == id
    )
    return (
      <Layout>
        <PageHeader></PageHeader>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            background: "white",
            padding: "0 50px",
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Content>
          <Layout style={{ display: "flex", flexDirection: "row" }}>
            <CustomSidebar />
            <Content style={{ padding: "20px 24px", minHeight: 280 }}>
              <Table
                loading={this.props.isLoading}
                columns={columns}
                dataSource={mappedUser}
              />
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  users: usersSelectors.items,
  isLoading: usersSelectors.isLoadingItems,
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestUser: () => {
      dispatch(
        usersActions.usersGetAllAjax({
          url: SERVICE_API,
        })
      );
    },
    deleteUser: (id) => {
      dispatch(
        usersActions.usersDeleteAjax({
          url: `${SERVICE_API}/${id}`,
        })
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
