import React, { useEffect } from "react";
import TodoLists from "./TodoLists";
import Header from "../layout/Header";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="m-4">
        <Categories />
        <TodoLists />
      </div>
    </div>
  );
}
