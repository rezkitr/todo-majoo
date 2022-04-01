import React from "react";
import { Modal } from "antd";
import {
  SmileOutlined,
  ReadOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const DetailModal = ({ todo, visible, setVisible }) => {
  const { id, title, description, createdAt } = todo;
  return (
    <div>
      <Modal
        title={`ID - ${id}`}
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        width={480}
      >
        <div className="flex flex-row items-center">
          <SmileOutlined />
          <div className="text-lg font-semibold ml-2">{title}</div>
        </div>
        <div className="flex flex-row items-center">
          <ReadOutlined />
          <div className="text-base font-semibold ml-2">{description}</div>
        </div>
        <div className="flex flex-row items-center">
          <ClockCircleOutlined />
          <div className="text-sm font-semibold ml-2">{createdAt}</div>
        </div>
      </Modal>
    </div>
  );
};

export default DetailModal;
