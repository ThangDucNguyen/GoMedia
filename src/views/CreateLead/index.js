import { Breadcrumb, Layout, Spin } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SERVICE_API } from "../../appConstants";
import { Flex ,PageHeader} from "../../em-web-ui/components/base/index";
import { usersActions } from "../../reduxResources/users";
import CreateForm from "./components/CreateForm";
import CustomSidebar from "../Home/component/CustomSidebar";

const { Content } = Layout;

class CreateLeadContainer extends Component {
  render() {
    const { isLoading, error } = this.props;
    if (isLoading) {
      return (
        <Flex flex={1} justifyContent="center">
          <Spin size="large" />
        </Flex>
      );
    }
    return (
      <Layout>
         <div style={{
          display: 'flex',
          flexDirection: 'row',
          background: 'white',
          padding: '0 50px'
        }}>
        <PageHeader></PageHeader>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Add</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Content >
          <Layout style={{ display: 'flex', flexDirection: 'row' }}>
          <CustomSidebar />
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Flex flex={1}>
                <CreateForm onSubmit={this.props.createLead} />
              </Flex>
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}
const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => {
  return {
    createLead: (data) => {
      dispatch(
        usersActions.usersInsertAjax({
          url: SERVICE_API,
          data,
        })
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateLeadContainer);
