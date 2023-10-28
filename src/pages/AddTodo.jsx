import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, setTodo } from "../redux/todoSlice/todoSlice";
import toast from "react-hot-toast";
import { DatePicker, Input, Select } from "antd";
import { categoriesOptions } from "../utils/constants.jsx";
import TextArea from "antd/es/input/TextArea";
import { getForMattedDate } from "../helpers/getFormattedDate";
import ResponsiveNav from "../layout/ResponsiveNav";

export default function AddTodo() {
  const dispatch = useDispatch();
  const [date, setDate] = useState();
  const [category, setCategory] = useState();
  const handleAddTodo = (e) => {
    e.preventDefault();

    const title = e.target.todo_title.value;

    const desc = e.target.todo_desc.value;

    const newTodo = { title, desc, date, category };
    console.log({ newTodo });
    if (date && title && category) {
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
    } else {
      toast.error("Please provide all data");
    }
  };

  return (
    <div>
      <ResponsiveNav />
      <div className=" flex justify-center items-center h-full">
        <form
          onSubmit={handleAddTodo}
          className="bg-white rounded-lg flex flex-col lg:w-3/4 w-full mx-2 lg:mx-auto lg:px-20 px-6 lg:py-10 py-5 gap-2 "
        >
          <h1 className="pb-10 text-xl text-center">Add a Todo </h1>

          <div>
            <label htmlFor="todo2"> Todo Title</label>
            <Input
              placeholder="Write a Title"
              name="todo_title"
              size="large"
              required
              className="w-full bg-white"
            />
          </div>
          <div>
            <label htmlFor="todo3 text-"> Todo Date</label>
            <DatePicker
              className="w-full"
              placeholder="Choose date"
              size="large"
              required
              onChange={(e) => setDate(getForMattedDate(e))}
              picker="day"
            />
          </div>

          <div>
            <label htmlFor="todo3 text-"> Todo Category</label>
            <Select
              className=" w-full"
              size="large"
              required
              name="todo_category"
              defaultValue={categoriesOptions[0]}
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
            <TextArea
              placeholder="Write description ...."
              rows={4}
              name="todo_desc"
              className="w-full"
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
    </div>
  );
}
