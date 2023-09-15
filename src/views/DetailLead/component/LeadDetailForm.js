import React, { Component } from "react";
import { Flex } from "../../../em-web-ui/components/base";
import { history } from "utils/reduxStoreHelper";
import {
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import {Avatar} from "antd"

class LeadDetail extends Component {
  render() {
    const {
      item: { first_name, last_name, email, phone, title,image },
      userId
    } = this.props;
    return (
      <Flex
        flexDirection="column"
        className="lead-detail"
        style={{
          width: "400px",
          height: "100vh",
          overflow: "hidden",
          background: "#d7f2fc",
          padding: "40px 60px",
        }}
      >
        <div
          className="back-button"
          style={{
            position: "absolute",
            top: "70px", 
            left: "0",
            cursor: "pointer",
            width: '70px',
            height: '35px',
            background: 'white',
            border: '0.5px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onClick={() => {
            history.goBack();
          }}
        >
          <ArrowLeftOutlined style={{ fontSize: "18px" }} />
        </div>
         <Avatar 
           style={{
            display: "inline-block",
            padding: "8px",
            background: "white",
            margin: "auto",
            marginTop: '100px',
            marginBottom: "20px",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
          }}
           src={image} />
        <div
          className="name"
          style={{
            color: "black",
            fontSize: "25px",
            fontWeight: "600",
            margin: "10px 0",
            textAlign: 'center'
          }}
        >
          {`${first_name} ${last_name}`}
        </div>
        <div style={{ color: "black", fontSize: "15px", margin: 'auto', marginTop: '0px' }}>
          <div style={{ margin: "10px 0" }}>
            <MailOutlined  style={{ marginRight: "12px", color: "#739cf9" }} />
            {`${title}`}
          </div>
          <div style={{ margin: "10px 0" }}>
            <PhoneOutlined  style={{ marginRight: "12px", color: "#739cf9" }} />
            {`${phone}`}
          </div>
          <div style={{ margin: "10px 0" }}>
            <UserOutlined style={{ marginRight: "12px", color: "#739cf9" }} />
            {`${email}`}
          </div>
        </div>
      </Flex>
    );
  }
}

export default LeadDetail;
