import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import ContactById from "./pages/contactById/ContactById";
import Pokupat from "./pages/pokupat/Pokupat";
import Sales from "./pages/Sales/Sales";
import Price from "./pages/price/price";
import Help from "./pages/help/Help";

const App = () => {
  const a = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/pokupat",
          element: <Pokupat />
        },
        {
          path: "/Sales",
          element: <Sales />
        },
        {
          path: "/help",
          element: <Help />
        },
        {
          path: "/price",
          element: <Price />

        },
        {
          path: "/contact/user/:id",
          element: <ContactById />,
        },
      ],
    },
  ]);
  return (
    <div className=" dark:bg-[#2B2A29]">
      <RouterProvider router={a} />
    </div>
  );
};

export default App;
