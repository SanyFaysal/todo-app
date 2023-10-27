import { useDispatch, useSelector } from "react-redux";
import TodoLists from "./components/TodoLists";
import { addTodo, setTodo } from "./redux/todoSlice/todoSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todoList"));
    dispatch(setTodo(items));
  }, []);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const date = e.target.todo_date.value;
    const title = e.target.todo_title.value;
    const desc = e.target.todo_desc.value;
    const newTodo = { date, title, desc };

    const getTodoLists = JSON.parse(localStorage.getItem("todoList"));
    if (getTodoLists) {
      getTodoLists.push(newTodo);
      localStorage.setItem("todoList", JSON.stringify(getTodoLists));
      dispatch(addTodo(newTodo));
    } else if (!getTodoLists) {
      const todoLists = [newTodo];
      localStorage.setItem("todoList", JSON.stringify(todoLists));
      dispatch(addTodo(newTodo));
    }
  };

  return (
    <div className=" m-8">
      <form
        onSubmit={handleAddTodo}
        className="bg-gray-100  flex flex-col w-1/2 mx-auto  p-20 gap-2 "
      >
        <div>
          <label htmlFor="todo3"> Todo Date</label>
          <input
            type="date"
            name="todo_date"
            id=""
            required
            className="px-3 py-2 rounded-lg w-full"
          />
        </div>

        <div>
          <label htmlFor="todo2"> Todo Title</label>

          <input
            required
            type="text"
            name="todo_title"
            className="  px-3 py-2 rounded-lg w-full"
          />
        </div>
        <div>
          <label htmlFor="todo1"> Todo description</label>
          <textarea
            className="rounded-lg w-full px-3 py-2"
            name="todo_desc"
            id=""
            cols="30"
            rows="3"
          />
        </div>
        <input
          type="submit"
          className="w-full  py-3 bg-green-500 text-center rounded-lg"
        />
      </form>
      <div className="w-full">
        <TodoLists />
      </div>
    </div>
  );
}

export default App;
