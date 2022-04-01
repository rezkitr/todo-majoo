import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const initialState = [];

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const response = await fetch(
    "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list"
  );
  if (response.ok) {
    const todos = await response.json();
    return { todos };
  }
});

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.desc || "",
        status: 0,
        createdAt: moment().format("YYYY-MM-DD HH:mm"),
      };
      state.push(todo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const updateIndex = state.findIndex(
        (todo) => todo.id === action.payload.data.id
      );
      console.log(updateIndex);
      state[updateIndex] = action.payload.data;
    },
  },
  extraReducers: {
    [getTodos.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
