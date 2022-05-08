// Modules
import React, { useState } from 'react';
import { Outlet } from "react-router-dom";

// files
import NavBar from "./header/navbar";
import Footer from './footer/footer';
import Sidebar from './header/sidebar';

/**
 * This function is use for web start point
 * It content all presentation items
 */
const IndexComponents = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    return(
        <div className={`relative w-screen h-screen max-w-[2560px] m-auto bg-background-full-screen ${showNavbar? 'overflow-y-hidden' : 'overflow-y-scroll'}`}>
            <div className='flex w-full'>
                <NavBar setShowNavbar={setShowNavbar} />
                <Sidebar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default IndexComponents;