import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, setTodo } from "../redux/todoSlice/todoSlice";
import toast from "react-hot-toast";

export default function AddTodo() {
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const date = e.target.todo_date.value;
    const title = e.target.todo_title.value;
    const desc = e.target.todo_desc.value;
    const newTodo = { date, title, desc };

    const getTodoLists = JSON.parse(localStorage.getItem("todoList"));
    if (getTodoLists) {
      getTodoLists.push(newTodo);
      localStorage.setItem("todoList", JSON.stringify(getTodoLists));
      dispatch(addTodo(newTodo));
    } else if (!getTodoLists) {
      const todoLists = [newTodo];
      localStorage.setItem("todoList", JSON.stringify(todoLists));
      dispatch(addTodo(newTodo));
    }

    toast.success("Todo added to your list", { id: "addTodo" });
  };

  return (
    <div className=" flex justify-center items-center h-full">
      <form
        onSubmit={handleAddTodo}
        className="bg-white rounded-lg flex flex-col w-3/4 mx-auto px-20 py-10 gap-2 "
      >
        <h1 className="pb-10 text-xl text-center">Add a Todo </h1>
        <div>
          <label htmlFor="todo3 text-"> Todo Date</label>
          <input
            type="date"
            name="todo_date"
            id=""
            required
            className="px-3 py-2 border rounded-lg w-full"
          />
        </div>

        <div>
          <label htmlFor="todo2"> Todo Title</label>

          <input
            required
            type="text"
            name="todo_title"
            className="  px-3 py-2 border rounded-lg w-full"
          />
        </div>
        <div>
          <label htmlFor="todo1"> Todo description</label>
          <textarea
            className="rounded-lg w-full px-3 py-2 border"
            name="todo_desc"
            id=""
            cols="30"
            rows="3"
          />
        </div>
        <div className="flex justify-end">
          <input
            type="submit"
            value="Add Todo"
            className="px-8  py-3 bg-sky-500 text-center rounded-lg"
          />
        </div>
      </form>
    </div>
  );
}
