import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ header, todos, done }) => {
  return (
    <div className="bg-white rounded-md py-6 px-6 w-3/4">
      <h3
        className={`text-2xl mb-6 font-bold ${
          done ? "text-lime-600" : "text-indigo-500"
        }`}
      >
        {header}
      </h3>
      {todos.length ? (
        <ul className="list-group">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TodoList;
