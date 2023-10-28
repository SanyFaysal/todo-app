import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListCard from "../components/ListCard";
import { Empty } from "antd";

export default function TodoLists() {
  const [items, setItems] = useState();
  const {
    todoList,
    searchResult,
    search: { text, date, dateRange },
  } = useSelector((state) => state?.todo);

  useEffect(() => {
    if (text?.length || date || dateRange) {
      setItems(searchResult);
    } else {
      setItems(todoList);
    }
  }, [todoList, searchResult, text, date, dateRange]);

  return (
    <div>
      <div className="flex justify-between mb-4 bg-white px-5 py-3 rounded-lg items-center ">
        <h1 className=" text-2xl">All Todo </h1>
        <h1 className=" text-xl text-center">Total: {todoList?.length} </h1>
      </div>
      <div className="grid grid-cols-2 gap-5  mb-8">
        {items?.map((item, index) => (
          <ListCard key={index} item={item} index={index} />
        ))}
        {(text || date || dateRange) && !searchResult?.length ? (
          <div className=" flex justify-center ">
            <Empty />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
