import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodo, updateTodo } from "../redux/todoSlice/todoSlice";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";
import { Select } from "antd";
import { categoriesOptions } from "../utils/constants";

export default function EditTodo() {
  const navigate = useNavigate();
  const [category, setCategory] = useState();
  const [todoDetails, setTodoDetails] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state?.todo);

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    const date = e.target.todo_date.value || todoDetails?.date;
    const title = e.target.todo_title.value || todoDetails?.title;
    const desc = e.target.todo_desc.value || todoDetails?.desc;
    const updatedData = { date, title, desc, category };

    const getTodoLists = JSON.parse(localStorage.getItem("todoList"));
    if (getTodoLists[id]) {
      getTodoLists[id] = updatedData;
      localStorage.setItem("todoList", JSON.stringify(getTodoLists));
      dispatch(updateTodo({ id, updatedData }));
    }

    toast.success("Successfully updated todo", { id: "addTodo" });
  };

  useEffect(() => {
    if (todoList[id]) {
      setTodoDetails(todoList[id]);
    }
  }, [todoList]);

  return (
    <div className="h-full flex justify-center items-center">
      {todoDetails ? (
        <form
          onSubmit={handleUpdateTodo}
          className="  flex flex-col w-3/4 mx-auto rounded-lg bg-white pt-10 px-20 pb-16 gap-2 "
        >
          <h1 className="text-center pb-10 text-xl">Update Todo</h1>
          <div>
            <label htmlFor="todo3 text-"> Todo Date</label>
            <input
              type="date"
              name="todo_date"
              id=""
              defaultValue={todoDetails?.date}
              required
              className="px-3 py-2 border rounded-lg w-full"
            />
          </div>

          <div>
            <label htmlFor="todo2"> Todo Title</label>

            <input
              required
              type="text"
              defaultValue={todoDetails?.title}
              name="todo_title"
              className="border  px-3 py-2 rounded-lg w-full"
            />
          </div>
          <div>
            <label htmlFor="todo3 text-"> Todo Category</label>
            <Select
              className=" w-full"
              size="large"
              required
              name="todo_category"
              value={category}
              defaultValue={todoDetails?.category}
              onChange={(e) => setCategory(e)}
              options={categoriesOptions.map((item, i) => ({
                label: item,
                value: item,
                disabled: item === categoriesOptions[0],
                key: i,
              }))}
            />
          </div>
          <div>
            <label htmlFor="todo1"> Todo description</label>
            <textarea
              defaultValue={todoDetails?.desc}
              className="rounded-lg w-full px-3 py-2 border"
              name="todo_desc"
              id=""
              cols="30"
              rows="4"
            />
          </div>
          <div className="flex justify-between">
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-1 hover:text-sky-500 "
            >
              <FiArrowLeft className="mt-1" />
              <button className="text-center rounded-lg">Go to back</button>
            </div>

            <input
              type="submit"
              value="Update Todo"
              className="  px-8 text-white mt-2 py-3 bg-sky-500 text-center rounded-lg"
            />
          </div>
        </form>
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
}
