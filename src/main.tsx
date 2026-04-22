import React from "react";
import ReactDom from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/menu/Menu";
import { arrOptions } from "./pages/menu/components/itemsList";
import HomeButton from "./components/HomeButton";

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <HomeButton/>
            <Routes>
                <Route path="/" element={<Menu />}/>
                {arrOptions.map((option) => (
                    <Route
                        key={option.id}
                        path={option.path}
                        element={option.element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)