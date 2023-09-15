import React from "react";
import { Tag } from "antd";
import { Box, Flex } from "../../../em-web-ui/components/base/index";
import { Link } from "react-router-dom";

export const COLUMNS_DEFS = {
  REF_LEADS: [
    {
      title: "Full Name",
      key: "Full Name",
      render: (text, record) => {
        return (
          <Link to={`/lead/detail/${record.id}`}>
            {" "}
            <Box>
              {record.first_name} {record.last_name}
            </Box>
          </Link>
        );
      },
    },
    {
      title: "Job Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
      render: (text) => <Box>{text}</Box>,
      responsive: ["md"],
    },
    {
      title: "Last Updated",
      dataIndex: "last_updated",
      key: "last_updated",
      render: (text, record) => {
        return <Box>{text}</Box>;
      },
    },
  ],
  REF_AGENTS: [
    {
      title: "System Role",
      dataIndex: "role",
      key: "role",
      render: (text, record) => {
        return (
          <Box>
            <Tag color={text === "admin" ? "red" : "green"}>{text}</Tag>
          </Box>
        );
      },
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
      render: (text, record) => {
        return <Box>{text}</Box>;
      },
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
      render: (text, record) => {
        return <Box>{text}</Box>;
      },
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Job Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
      render: (text) => <Box>{text}</Box>,
      responsive: ["md"],
    },
    {
      title: "Last Updated",
      dataIndex: "last_updated",
      key: "last_updated",
      render: (text, record) => {
        return <Box>{text}</Box>;
      },
    },
  ],
};
