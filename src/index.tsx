import {createRoot} from "react-dom/client";
import {App} from "@/App";
import React, {Suspense} from "react";
import '@/index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {About} from "@/pages/about";
import {Shop} from "@/pages/shop";

const root = document.getElementById('root')

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'Loading...'}>
                    <About/>
                </Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={'Loading...'}>
                    <Shop/>
                </Suspense>
            }
        ]
    },
]);

container.render(
    <RouterProvider router={router}/>
)