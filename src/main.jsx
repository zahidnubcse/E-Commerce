import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import ShopContextProvider from "./Context/ShopContext.jsx";
import router from "./Routes/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  </React.StrictMode>
);

