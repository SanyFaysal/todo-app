import { useDispatch } from "react-redux";
import MainLayout from "./layout/MainLayout";
import { useEffect } from "react";
import { setTodo } from "./redux/todoSlice/todoSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todoList"));
    dispatch(setTodo(items));
  }, []);

  return <MainLayout />;
}

export default App;
