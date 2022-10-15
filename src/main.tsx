import React from 'react'
import './index.css'
import {createRoot} from "react-dom/client";
import {
    RouterProvider,
} from "react-router-dom";
import router from "./routes";
import {Provider} from 'react-redux'
import store from "./store/reduxStore";

createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

