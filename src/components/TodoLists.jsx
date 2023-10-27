import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListCard from "./card/ListCard";

export default function TodoLists() {
  const [items, setItems] = useState();
  const { todoList } = useSelector((state) => state?.todo);

  useEffect(() => {
    setItems(todoList);
  }, [todoList]);
  return (
    <div className="grid grid-cols-3 gap-5">
      {items?.map((item, i) => (
        <ListCard key={i} item={item} />
      ))}
    </div>
  );
}
