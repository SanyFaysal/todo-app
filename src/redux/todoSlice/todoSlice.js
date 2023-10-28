import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  searchResult: [],
  search: {
    text: "",
    date: null,
    dateRange: 0,
  },
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
    setSearch: (state, { payload }) => {
      state.search[payload.key] = payload.value;
    },
  },
});

export const {
  addTodo,
  setTodo,
  updateTodo,
  deleteTodo,
  searchResult,
  setSearch,
} = todoSlice.actions;

export default todoSlice.reducer;
