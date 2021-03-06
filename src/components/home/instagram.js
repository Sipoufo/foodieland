// Modules
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Use for add icons
import { faInstagram } from "@fortawesome/free-brands-svg-icons";// use for import specific icon

// Files
import PageInstagram from "./pageInstagram";// File for instagram model page

const Instagram = () => {
    return (
        <div className="mt-24 flex flex-col bg-gradient-to-b from-white to-emerald-50">
            {/* Introduction instagram part */}
            <div className="mt-14 flex flex-col items-center w-full">
                <div className="w-full sm:w-4/6 lg:w-8/12 text-center">
                    <h1 className="text-xl sm:text-3xl font-bold">Check out @foodieland on Instagram</h1>
                    <p className="mt-4 text-xs ">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
            </div>
            {/* Instagram pages */}
            <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
                <PageInstagram />
                <PageInstagram />
                <PageInstagram />
                <PageInstagram />
            </div>
            {/* Button for see more pages */}
            <div className="flex justify-center my-20">
                <button className="flex bg-black text-white py-2 px-3 rounded-xl items-center">
                    <span className="text-xs">Visit ours Instagram</span>
                    <FontAwesomeIcon className='text-lg pl-2' icon={faInstagram} />
                </button>
            </div>
        </div>
    )
};

export default Instagram;