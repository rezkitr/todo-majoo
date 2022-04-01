import React from "react";
import { useSelector } from "react-redux";

const DoneTodos = () => {
  const todos = useSelector((state) =>
    state.todos.filter((todo) => todo.status === 1)
  );

  return (
    <div className="bg-white rounded-md py-6 px-6">
      <h3 className="text-2xl text-lime-600 font-bold">Done Todos</h3>
      <ul className="list-group">
        {todos.map((todo) => (
          <h5 key={todo.id}>{todo.title}</h5>
        ))}
      </ul>
    </div>
  );
};

export default DoneTodos;
