function App() {
  const handleAddTodo = (e) => {
    e.preventDefault();
    const date = e.target.todo_date.value;
    const title = e.target.todo_title.value;
    const desc = e.target.todo_desc.value;

    const getTodoLists = JSON.parse(localStorage.getItem("todoList"));
    if (getTodoLists?.length) {
    }

    if (localStorage)
      localStorage.setItem("todoList", JSON.stringify({ date, title, desc }));
  };
  return (
    <form
      onSubmit={handleAddTodo}
      className="bg-gray-100  flex flex-col w-1/2 mx-auto m-32 p-20 gap-2 "
    >
      <div>
        <label htmlFor="ToDo title"> Todo Date</label>
        <input
          type="date"
          name="todo_date"
          id=""
          className="px-3 py-2 rounded-lg w-full"
        />
      </div>

      <div>
        <label htmlFor="ToDo title"> Todo Title</label>

        <input
          type="text"
          name="todo_title"
          className="  px-3 py-2 rounded-lg w-full"
        />
      </div>
      <div>
        <label htmlFor="ToDo title"> Todo description</label>
        <textarea
          className="rounded-lg w-full"
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
  );
}

export default App;
