import React from "react";
import { useSelector } from "react-redux";

export default function Categories() {
  const { todoList } = useSelector((state) => state.todo);
  const categoryArray = [];
  todoList?.forEach((item) => {
    const existingCategory = categoryArray.find(
      (category) => category.category === item.category
    );

    if (existingCategory) {
      existingCategory.allTodos.push(item);
    } else {
      categoryArray.push({ category: item.category, allTodos: [item] });
    }
  });
  return (
    <div className="grid grid-cols-4 gap-6 border-rounded mb-5">
      {categoryArray?.map((category) => (
        <div className="bg-white  rounded-lg flex flex-col p-16 justify-center items-center">
          <p className="uppercase text-3xl">{category?.category}</p>
          <p className="text-2xl text-center">
            {category?.allTodos?.length} Todos
          </p>
        </div>
      ))}
    </div>
  );
}
