import React from "react";
import moment from "moment";
import { FiTrash2, FiEdit2, FiClipboard } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { deleteTodo } from "../redux/todoSlice/todoSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
export default function ListCard({ item, index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDeleteTodo = (index) => {
    let getTodoLists = JSON.parse(localStorage.getItem("todoList"));
    if (getTodoLists[index]) {
      getTodoLists = getTodoLists.filter((item, i) => i !== index);
      localStorage.setItem("todoList", JSON.stringify(getTodoLists));
      dispatch(deleteTodo(index));
    }
    toast.success("Successfully deleted", { id: "deleteTodo" });
  };
  return (
    <div className="p-5 bg-white text-gray-700  rounded-lg text-lg ">
      <div className="flex justify-between items-top">
        <div>
          <h1 className="text-lg text-sky-500 font-semibold">
            {moment(item?.date).format("dddd")}
          </h1>
          <p className=" text-sm  text-sky-500">
            {moment(item?.date).format("MMMM Do YYYY")}
          </p>
        </div>
        <div className="flex gap-3 mt-0">
          <div>
            <button
              onClick={() => navigate(`/todo/${index}`)}
              className="px-2 py-1 bg-sky-50 text-sky-500 rounded text-lg border border-sky-100  hover:bg-sky-500 transition duration-200 hover:text-white"
            >
              {" "}
              <FiEdit2 />
            </button>
          </div>
          <div>
            <button className="px-2 py-1 bg-green-50 text-green-500 rounded text-xl border border-green-100  hover:bg-green-500 transition duration-200 hover:text-white">
              {" "}
              <FiClipboard />
            </button>
          </div>
          <div>
            <button
              onClick={() => handleDeleteTodo(index)}
              className="px-2 py-1 bg-red-50 text-red-500 hover:bg-red-500 transition duration-200 hover:text-white rounded text-lg border border-red-100"
            >
              {" "}
              <FiTrash2 />
            </button>
          </div>
        </div>
      </div>
      <h1 className="mt-1 text-xl font-semibold">{item?.title}</h1>

      <p className="">{item?.desc?.slice(0, 200)}</p>
    </div>
  );
}
