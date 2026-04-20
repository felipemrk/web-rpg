import React from "react";
import ReactDom from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Menu from "./pages/menu/menu";

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Menu />
        </BrowserRouter>
    </React.StrictMode>
)