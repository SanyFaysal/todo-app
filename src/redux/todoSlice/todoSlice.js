import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  searchResult: [],
  searchText: null,
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
      console.log({ payload });
      state.searchResult = payload;
    },
    searchText: (state, { payload }) => {
      state.searchText = payload;
    },
  },
});

export const {
  addTodo,
  setTodo,
  updateTodo,
  deleteTodo,
  searchResult,
  searchText,
} = todoSlice.actions;

export default todoSlice.reducer;
