import React from "react";
import { createRoot } from 'react-dom/client';
import "./scss/initialize.scss";
import "./scss/btn.scss";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 如果資料夾底下的js是index.js則可以省略
import Home from "./pages/Home";
import List from "./pages/List";


const container = document.getElementById('root');
const root = createRoot(container);

// [使用] BrowserRouter
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


