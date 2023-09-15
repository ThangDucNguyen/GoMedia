import React, { Component } from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { authActions, authSelectors } from "reduxResources/auth";
import Proptypes from "prop-types";
import { createStructuredSelector } from "reselect";
import {
  DUMMY_USER_CREDENTIALS,
  ADMIN_SERVICE_API,
  PATHS,
} from "../../appConstants";
import { isEmpty } from "lodash";

const { Title } = Typography;

class LoginPage extends Component {
  state = {
    userInfo: {},
    isLoading: false,
  };
  static proTypes = {
    requestAuth: Proptypes.func.isRequired,
    auth: Proptypes.array.isRequired,
  };

  onFinish = (values) => {
    // TODO: Change this logic to real API call
    this.props.requestAuth(Math.floor(Math.random() * 4));
  };

  componentDidMount() {
    localStorage.clear();
  }

  formRef = React.createRef();

  render = () => {
    const { isLoading, userInfo } = this.state;
    const { history, auth } = this.props;
    const user = auth ? JSON.stringify(auth) : {};

    if (!isEmpty(user) && !isLoading && !!userInfo) {
      localStorage.setItem("userInfo", JSON.stringify(auth));
      history.push(PATHS.LIST);
    }

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card style={{ width: 500 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Title level={2} type="strong">
              GoMedia{" "}
            </Title>
          </div>
          <Form
            ref={this.formRef}
            name="login"
            onFinish={this.onFinish}
            initialValues={{ remember: true }}
            style={{ width: "100%" }}
          >
            <Form.Item
              name="username"
              label={"Username"}
              rules={[
                { required: true, message: "Please input your username!" },
                {
                  validator: (_, value) => {
                    const existingRecord = DUMMY_USER_CREDENTIALS.filter(
                      (el) => el.username === value
                    )[0];
                    if (!existingRecord)
                      return Promise.reject(
                        new Error("Username does not exist!")
                      );
                    else return Promise.resolve();
                  },
                },
              ]}
              validateTrigger={"onSubmit"}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              label={"Password"}
              rules={[
                { required: true, message: "Please input your password!" },
                {
                  validator: (_, value) => {
                    const existingRecord = DUMMY_USER_CREDENTIALS.filter(
                      (el) =>
                        el.username ===
                        this.formRef.current.getFieldValue("username")
                    )[0];

                    if (existingRecord && existingRecord.password !== value)
                      return Promise.reject(new Error("Password is incorrect"));
                    else return Promise.resolve();
                  },
                },
              ]}
              validateTrigger={"onSubmit"}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                loading={isLoading}
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  };
}

const mapStateToProps = createStructuredSelector({
  auth: authSelectors.item,
  isLoading: authSelectors.isLoadingItems,
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestAuth: (userId = 1) => {
      //userId present for agents Id
      dispatch(
        authActions.authGetAjax({
          url: `${ADMIN_SERVICE_API}/REF_AGENTS/${userId}`,
        })
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginPage));
