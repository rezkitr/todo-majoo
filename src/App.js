import React, { useEffect } from "react";
import AddForm from "./components/AddForm";
import TodoListContainer from "./components/TodoListContainer";
import { useDispatch } from "react-redux";
import { getTodos } from "./redux/todoSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-4xl font-semibold mb-12">Todo List</h1>
      <AddForm />
      <div className="mt-6">
        <TodoListContainer />
      </div>
    </div>
  );
};

export default App;
