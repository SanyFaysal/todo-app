import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  searchResult: [],
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
    searchResult: (state, { payload }) => {
      state.todoList = payload;
    },
  },
});

export const { addTodo, setTodo, updateTodo, deleteTodo, searchResult } =
  todoSlice.actions;

export default todoSlice.reducer;
