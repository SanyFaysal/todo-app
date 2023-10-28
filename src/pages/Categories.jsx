import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategoriesTodo } from "../helpers/getCategoriesTodo";

export default function Categories() {
  const navigate = useNavigate();
  const { todoList } = useSelector((state) => state.todo);
  const categoryArray = getCategoriesTodo(todoList);
  return (
    <div className="mx-5 my-5">
      <div className="flex justify-between mb-4  bg-white px-5 py-3 rounded-lg items-center ">
        <h1 className=" text-2xl">Todo Categories</h1>
        <h1 className=" text-xl text-center">Total: {categoryArray?.length}</h1>
      </div>

      <div className="grid grid-cols-4 gap-6 border-rounded ">
        {categoryArray?.map((category) => (
          <div
            onClick={() => navigate(`/categories/${category?.category}`)}
            className="bg-white hover:cursor-pointer hover:text-sky-500  hover:border-b-2 hover:border-b-sky-500 border-2 border-white rounded-lg flex flex-col p-16 justify-center items-center"
          >
            <p className="uppercase text-3xl">{category?.category}</p>
            <p className="text-2xl text-center">
              {category?.allTodos?.length} Todos
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
