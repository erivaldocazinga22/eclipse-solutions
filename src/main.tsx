import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Routers } from "./router.tsx";
import "./globals.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  	<React.StrictMode>
    	<RouterProvider router={Routers} />
  	</React.StrictMode>,
)
