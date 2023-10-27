import React, { useEffect } from "react";
import TodoLists from "./TodoLists";
import Header from "../layout/Header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="m-4">
        <TodoLists />
      </div>
    </div>
  );
}
