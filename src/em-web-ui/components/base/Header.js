import React, { Component } from "react";
import { Row, Col, Layout, Button, Popover, Avatar } from "antd";
import { ReactComponent as Img } from "../image/user.svg";
import { MailOutlined } from "@ant-design/icons";
import {  ADMIN_AUTH,PATHS} from "../../../appConstants";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const { Header } = Layout;

class PageHeader extends Component {
  static proTypes = {
    match: Proptypes.object.isRequired,
    location: Proptypes.object.isRequired,
    history: Proptypes.object.isRequired,
  };  

  state = {userInfo: {} };

  componentDidMount() {
    this.state.userInfo = localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")) : {}
  }
  render() {
    const { location, history} = this.props;
    const {userInfo} = this.state;
    const {
      email,
      first_name,
      image,
      last_name,
      last_updated,
      phone,
      role,
      title,
    } = userInfo || {};
    const isAdmin = ADMIN_AUTH.includes(role)

    const isAdminPage = location.pathname === PATHS.ADMIN 
    if(!!isAdminPage && !isAdmin){
      history.push(PATHS.LIST)
    }

    const content = (
      <Link to={PATHS.ADMIN}>
        <Button type="primary">Admin Page</Button>
      </Link>
    );
    
    return (
      <div
        style={{
          backgroundColor: "white",
        }}
      >
        <Header
          style={{
            color: "white",
            width: "100%",
            height: 100,
            paddingLeft: 35,
            paddingRight: 35,
            top: 0,
          }}
        >
          <Row
            align="middle"
            style={{
              height: 50,
              paddingTop: 10,
            }}
          >
            <Col flex={2}>GoMedia</Col>
            <Col>
              55 <MailOutlined />
            </Col>
            <Col style={{ textAlign: "right", marginLeft: 25 }}>
              Welcome {first_name} {last_name}
            </Col>
            <Col>
              {isAdmin ? (
                <Popover content={content} trigger="hover">
                  <div
                    style={{
                      height: 40,
                      width: 40,
                      backgroundColor: "#545B64",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      marginLeft: 14,
                    }}
                  >
                    {!!image ? (
                      <Avatar src={image} />
                    ) : (
                      <Img style={{ height: 19, width: 16 }} />
                    )}
                  </div>
                </Popover>
              ) : (
                <div
                  style={{
                    height: 40,
                    width: 40,
                    backgroundColor: "#545B64",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    marginLeft: 14,
                  }}
                >
                  {!!image ? (
                    <Avatar src={image} />
                  ) : (
                    <Img style={{ height: 19, width: 16 }} />
                  )}
                </div>
              )}
            </Col>
          </Row>
        </Header>
      </div>
    );
  }
}

export default withRouter(PageHeader);
