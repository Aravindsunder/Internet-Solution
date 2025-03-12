import Nav from "./navbar";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Game from "./Game";
import Layout from "./Layout";
import Form from "./Form";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
        },
        {
          path: "/game",
          element: <Game />,
        },
        {
          path: "/form",
          element: <Form />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
