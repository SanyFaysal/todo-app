import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/Home";
import AddTodo from "../pages/AddTodo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "add-todo",
        element: <AddTodo />,
      },
    ],
  },
]);

export default router;
