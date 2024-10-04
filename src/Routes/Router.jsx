import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home";
import About from "../Components/About";
import Login from "../Components/Login";
import Register from "../Components/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: "/",
            element: <Home/>,
          },
          {
            path: "/about",
            element: <About/>,
          },
          {
            path: "/login",
            element: <Login/>,
          },
          {
            path: "/register",
            element: <Register/>,
          }
        // Add your routes here
      ],
    },
  ]);

export default router;