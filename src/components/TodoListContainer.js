import React from "react";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";

const TodoListContainer = () => {
  const doneTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.status === 1)
  );

  const ongoingTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.status === 0)
  );

  return (
    <div className="flex flex-row gap-x-4" style={{ width: "960px" }}>
      <TodoList header="Done Todos" todos={doneTodos} done />
      <TodoList header="Ongoing Todos" todos={ongoingTodos} />
    </div>
  );
};

export default TodoListContainer;
