// Modules
import React from 'react';
import { Outlet } from "react-router-dom";

// files
import NavBar from "./header/navbar";
import Footer from './footer/footer';

/**
 * This function is use for web start point
 * It content all presentation items
 */
const IndexComponents = () => {
    return(
        <div className='w-screen h-screen bg-background-full-screen scrollbar-none'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default IndexComponents;