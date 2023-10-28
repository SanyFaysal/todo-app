import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListCard from "../components/ListCard";

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
  console.log({ items });
  return (
    <div className="grid grid-cols-1 gap-5  mb-8">
      {items?.map((item, index) => (
        <ListCard key={index} item={item} index={index} />
      ))}
    </div>
  );
}
