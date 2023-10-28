import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListCard from "../components/ListCard";
import { Empty } from "antd";

export default function TodoLists() {
  const [items, setItems] = useState();
  const { todoList, searchResult, searchText } = useSelector(
    (state) => state?.todo
  );

  useEffect(() => {
    if (searchText) {
      setItems(searchResult);
    } else {
      setItems(todoList);
    }
  }, [todoList, searchResult, searchText]);

  return (
    <div className="grid grid-cols-1 gap-5  mb-8">
      {items?.map((item, index) => (
        <ListCard key={index} item={item} index={index} />
      ))}
      {searchText && !searchResult?.length && (
        <div className=" flex justify-center ">
          <Empty />
        </div>
      )}
    </div>
  );
}
