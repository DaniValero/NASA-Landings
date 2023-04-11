import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Potd from "./routes/Potd";
import Landing from "./routes/Landing"
import Neas from './routes/Neas'
import Cplandings from './routes/Cplandings'
import Cpneas from './routes/Cpneas'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root /> ,
    children: [
      {
        path: "/",
        element: <Potd />,
      },
      {
        path: "/landing",
        element: <Landing />,
      },
      {
        path: "/landing/list",
        element: <Cplandings />,
      },
      {
        path: "/neas",
        element: <Neas />,
      },
      {
        path: "/neas/list",
        element: <Cpneas />,
      },
      
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

