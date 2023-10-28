import React from "react";
import { useParams } from "react-router-dom";
import { getCategoriesTodo } from "../helpers/getCategoriesTodo";
import { useSelector } from "react-redux";
import ListCard from "../components/ListCard";

export default function CategoriesTodo() {
  const { title } = useParams();
  const { todoList } = useSelector((state) => state.todo);
  const categoryArray = getCategoriesTodo(todoList);
  const categoryTodo = categoryArray.find((item) => item?.category === title);
  console.log({ categoryTodo });
  return (
    <div className="mx-5 my-5">
      <div className="flex justify-between mb-4 bg-white px-5 py-3 rounded-lg items-center ">
        <h1 className=" text-2xl">{title} - Todo</h1>
        <h1 className=" text-xl text-center">
          Total: {categoryTodo?.allTodos?.length}{" "}
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        {categoryTodo?.allTodos?.map((item, index) => (
          <ListCard item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
