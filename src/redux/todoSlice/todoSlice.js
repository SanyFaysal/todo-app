import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      if (state?.todoList?.length) {
        state.todoList.push(payload);
      } else {
        state.todoList = [payload];
      }
    },
    setTodo: (state, { payload }) => {
      state.todoList = payload;
    },
  },
});

export const { addTodo, setTodo } = todoSlice.actions;

export default todoSlice.reducer;
