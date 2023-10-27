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
    updateTodo: (state, { payload: { id, updatedData } }) => {
      state.todoList[id] = updatedData;
    },
    deleteTodo: (state, { payload }) => {
      state.todoList = state.todoList.filter(
        (item, index) => index !== payload
      );
    },
  },
});

export const { addTodo, setTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
