import React from "react";
import { useParams } from "react-router-dom";
import { getCategoriesTodo } from "../helpers/getCategoriesTodo";
import { useSelector } from "react-redux";

import CategoryCardTodo from "../components/CategoryCardTodo";
import ResponsiveNav from "../layout/ResponsiveNav";

export default function CategoriesTodo() {
  const { title } = useParams();
  const { todoList } = useSelector((state) => state.todo);
  const categoryArray = getCategoriesTodo(todoList);
  const categoryTodo = categoryArray.find((item) => item?.category === title);

  return (
    <div className="mx-5 my-5">
      <div className="flex justify-between mb-4 bg-white px-5 py-3 rounded-lg items-center ">
        <div className="flex gap-2">
          <div>
            <ResponsiveNav />
          </div>
          <h1 className=" lg:text-2xl text-lg">{title} - Todo</h1>
        </div>
        <h1 className=" text-xl text-center">
          Total: {categoryTodo?.allTodos?.length}{" "}
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 ">
        {categoryTodo?.allTodos?.map((item, index) => (
          <CategoryCardTodo item={item} index={undefined} />
        ))}
      </div>
    </div>
  );
}
