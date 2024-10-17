import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import {Landing} from "./components/Landing";
import {Pricing} from "./components/Pricing";

const router = createBrowserRouter([
    {
        path: "pricing",
        element: <Pricing />
    },
    {
        path: "/",
        element: <Landing />,
    },
]);

export const App = () => (
    <RouterProvider router={router} />
);