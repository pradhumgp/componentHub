import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import ModalPage from './pages/ModalPage.jsx';
import TooltipPage from './pages/TooltipPage.jsx';
import Layout from './components/Layout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/modal",
    element: <ModalPage/>,
  },
  {
    path: "/tooltip",
    element: <TooltipPage/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
     <RouterProvider router={router} />
     </Layout>
  </React.StrictMode>,
)
