import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IndexComponents from "../components/index"
import Home from "../components/home/home"
import IndexRecipeDetails from '../components/recipeDetails';

/**
 *  This function is a starting point of your router module
 *  It will contain all of router
 */
const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<IndexComponents />}>
                <Route index element={<Home />} />
                <Route path="/recipe-details" element={<IndexRecipeDetails />} />
            </Route>
        </Routes>  
    )
}

export default Router;