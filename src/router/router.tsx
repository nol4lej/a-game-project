import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./ProjectRoute";
import Layout from "./Layout";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout children={<Home />} />,
    },
    {
        path: "/user",
        element: (
            <ProtectedRoute>
                <Layout>
                <h1>user</h1>
                </Layout>
            </ProtectedRoute>
        ),
    },
    {
        path: "/*",
        element: <Layout children={<h1>404</h1>} />,
    },
])

export default router