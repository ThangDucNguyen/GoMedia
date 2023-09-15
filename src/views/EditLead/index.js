import { Breadcrumb, Layout } from "antd";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { createStructuredSelector } from "reselect";
import { Flex } from "../../em-web-ui";
import { userActions, userSelectors } from "../../reduxResources/user";
import CreateForm from "../CreateLead/components/CreateForm";
import { SERVICE_API } from "../../appConstants";
import CustomSidebar from "../Home/component/CustomSidebar";

const { Content } = Layout;

class EditLead extends Component {
  static proTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  componentDidMount() {
    const leadId = this.props.match.params.id || "";
    this.props.getLead(leadId);
  }

  render() {
    const { user } = this.props;
    return (
      <Layout>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          background: 'white',
          padding: '0 50px'
        }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Edit</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Content >     
          <Layout theme="light" style={{ display: 'flex', flexFlow: 'row' }} >
            <CustomSidebar />
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Flex flex={1}>
                <CreateForm
                  onSubmit={this.props.editLead}
                  item={user ? user.toJS() : {}}
                />
              </Flex>
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: userSelectors.item,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getLead: (id) => {
      dispatch(
        userActions.userGetAjax({
          url: `${SERVICE_API}/${id}`,
        })
      );
    },
    editLead: (id, data) => {
      dispatch(
        userActions.userUpdateAjax({ url: `${SERVICE_API}/${id}`, data })
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditLead));
