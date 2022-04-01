import React, { useState } from "react";
import DetailModal from "./DetailModal";
import EditFormModal from "./EditFormModal";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ todo }) => {
  const { id, title, status } = todo;
  const dispatch = useDispatch();

  const [showDetailInfo, setShowDetailInfo] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const onDelete = () => {
    dispatch(
      deleteTodo({
        id,
      })
    );
  };

  const onEdit = () => {
    setShowEdit(true);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between border-b-2 pb-2 mb-2">
        <Button
          type="text"
          className="btn-todo-item"
          onClick={() => setShowDetailInfo(true)}
        >
          {title}
        </Button>
        <div>
          <Button
            type="text"
            icon={
              <EditOutlined style={{ color: "blueviolet" }} onClick={onEdit} />
            }
          />
          {status === 0 && (
            <Button
              danger
              type="text"
              icon={<DeleteOutlined />}
              onClick={onDelete}
            />
          )}
        </div>
      </div>

      <DetailModal
        todo={todo}
        visible={showDetailInfo}
        setVisible={setShowDetailInfo}
      />

      <EditFormModal todo={todo} visible={showEdit} setVisible={setShowEdit} />
    </>
  );
};

export default TodoItem;
