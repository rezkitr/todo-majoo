import React, { useEffect } from "react";
import moment from "moment";
import { Form, Input, Modal, Radio } from "antd";
import { ReadOutlined, SmileOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/todoSlice";

const EditFormModal = ({ todo, visible, setVisible }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { Item } = Form;
  const { id, title, description: desc, status } = todo;

  useEffect(() => {
    if (todo) {
      form.setFieldsValue({
        title,
        desc,
        status,
      });
    }
  }, [todo]);

  const onSubmit = (value) => {
    dispatch(
      updateTodo({
        data: {
          id,
          status: value.status ?? 1,
          description: value.desc,
          ...value,
          createdAt: moment().format("YYYY-MM-DD HH:mm"),
        },
      })
    );

    setVisible(false);
    form.resetFields(["title", "desc"]);
  };

  return (
    <div>
      <Modal
        title="Edit Todo"
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={() => {
          form.submit();
        }}
        width={480}
      >
        <Form form={form} name="edit_form" onFinish={onSubmit}>
          <Item
            name="title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input prefix={<SmileOutlined />} placeholder="Title" />
          </Item>
          <Item name="desc" rules={[{ required: false }]}>
            <Input prefix={<ReadOutlined />} placeholder="Description" />
          </Item>
          {status === 0 && (
            <Item name="status" rules={[{ required: true }]}>
              <Radio.Group>
                <Radio value={1}>Done</Radio>
                <Radio value={0}>Ongoing</Radio>
              </Radio.Group>
            </Item>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default EditFormModal;
