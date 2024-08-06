import { createBrowserRouter } from "react-router-dom";

import Layout from "./app/pages/Layout";
import Home from "./app/pages/Home";
import About from "./app/pages/About";
import Projects from "./app/pages/Projects";
import Terms from "./app/pages/suport/Terms";
import Cookies from "./app/pages/suport/Cookies";
import Privacity from "./app/pages/suport/Privacity";

export const Routers = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "suport/terms",
                element: <Terms />
            },
            {
                path: "suport/cookies",
                element: <Cookies />
            },
            {
                path: "suport/privacity",
                element: <Privacity />
            },
        ]
    }
])