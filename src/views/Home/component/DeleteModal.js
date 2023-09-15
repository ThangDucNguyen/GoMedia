import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React from "react";

const ConfirmModal = (record, onDelete) => {
  Modal.confirm({
    title: "Delete",
    icon: <ExclamationCircleOutlined />,
    content: `Are you sure you want to delete ${record.first_name} ${record.last_name}.`,
    onOk: () => onDelete(record.id),
  });
};
export default ConfirmModal;
