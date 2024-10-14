import React, { useState, useEffect } from 'react';
import {StrictMode } from "react";
import {createRoot } from "react-dom/client";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Page404 from './pages/Autres/Page404';

function Main() {
   
    return (
     
        <Router>
            <Routes>
                <Route exact path="/" element={<Page404 />} />
            </Routes>
        </Router>

    );
}
export default Main;  

if (document.getElementById('app')) {
    const container = document.getElementById("app");
    const root = createRoot(container);
    root.render(
        <StrictMode>
            <Main />
        </StrictMode>
    );
}