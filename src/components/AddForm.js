import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { ReadOutlined, SmileOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddForm = () => {
  const [form] = Form.useForm();
  const { Item } = Form;
  const dispatch = useDispatch();

  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onAddTodo = (value) => {
    const { title, desc } = value;
    dispatch(
      addTodo({
        title,
        desc,
      })
    );
    form.resetFields(["title", "desc"]);
  };

  return (
    <div className="bg-white rounded-md px-6 py-6">
      <div className="flex flex-row items-center mb-2">
        <PlusOutlined />
        <div className="font-semibold ml-1">Add Todo</div>
      </div>
      <Form form={form} name="add_form" layout="inline" onFinish={onAddTodo}>
        <Item
          name="title"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input prefix={<SmileOutlined />} placeholder="Title" />
        </Item>
        <Item name="desc" rules={[{ required: false }]}>
          <Input prefix={<ReadOutlined />} placeholder="Description" />
        </Item>
        <Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Add
            </Button>
          )}
        </Item>
      </Form>
    </div>
  );
};

export default AddForm;
