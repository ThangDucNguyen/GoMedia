import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  FundOutlined,
  PushpinOutlined,
} from "@ant-design/icons";

const CustomSidebar = () => {
  return (
    <Menu theme="light" mode="vertical" defaultSelectedKeys={["user"]} style={{height: '100vh', width: '180px'}}>
      <Menu.Item key="user" icon={<UserOutlined />}>
        <Link to="/user">Leads Tracker</Link>
      </Menu.Item>
      <Menu.Item key="admin" icon={<FundOutlined  />} >
        Portfolio Analysis
      </Menu.Item>
      <Menu.Item key="admin" icon={<PushpinOutlined />} >
       Directory
      </Menu.Item>
    </Menu>
  );
};

export default CustomSidebar;
