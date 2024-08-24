import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
//Pages import
import ModalPage from "./pages/ModalPage.jsx";
import TooltipPage from "./pages/TooltipPage.jsx";
import Layout from "./components/Layout.jsx";
import CommentsPage from "./pages/CommentsPage.jsx";
import AccordionPage from "./pages/AccordionPage.jsx";
import SearchBarPage from "./pages/SearchBarPage.jsx";
//Pages import

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Modal",
    element: <ModalPage />,
  },
  {
    path: "/Tooltip",
    element: <TooltipPage />,
  },
  {
    path: "/Comments",
    element: <CommentsPage />,
  },
  {
    path: "/Accordion",
    element: <AccordionPage />,
  },
  {
    path: "/SearchBar",
    element: <SearchBarPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
