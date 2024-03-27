import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Header from "./components/Header/Header.jsx";
import Contact from "./components/Contact/Contact.jsx";
import TShirts from "./components/TShirts/TShirts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path:'t-shirts',
        element:<TShirts/>,
        loader: ()=>fetch('tShirts.json')
      },
      {
        path:'about',
        element: <About/>
      },
      {
        path:'contact',
        element:<Contact/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
