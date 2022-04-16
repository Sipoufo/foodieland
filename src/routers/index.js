import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IndexComponents from "../components/index"
import Home from "../components/home/home"

/**
 *  This function is a starting point of your router module
 *  It will contain all of router
 */
const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<IndexComponents />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>  
    )
}

export default Router;