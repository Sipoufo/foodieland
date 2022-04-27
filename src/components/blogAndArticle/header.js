import React from "react";

const Header = () => {
    return(
        <div className="w-full flex relative justify-center">
            <div className="flex flex-col w-full lg:w-7/12 relative items-center">
                {/* Title */}
                <h1 className="text-6xl font-bold">Blog & Article</h1>
                {/* Module description */}
                <p className="text-sm text-slate-600 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                {/* Send mail */}
                <div className='flex flex-row w-10/12 mt-16 bg-white p-3 border border-slate-300 rounded-3xl justify-between'>
                    <input className='w-7/12 mx-2 px-2 text-lg' placeholder='Your email address' />
                    <button className='w-5/12 text-white text-lg bg-black px-5 py-3 rounded-xl'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Header;