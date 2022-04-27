import React from "react";

const BlogList = () => {
    return(
            <div className="flex flex-row gap-6">
                {/* Food image */}
                <div className="w-4/12 h-48 hidden sm:flex">
                    <img src={process.env.PUBLIC_URL + "/images/Foods/food12.png"} className='w-full h-full object-cover rounded-3xl' alt="food" />
                </div>
                <div className="grow flex flex-col w-full h-full justify-between border border-black p-2 rounded-2xl sm:border-0 sm:p-0">
                    {/* recite name */}
                    <h1 className="text-lg sm:text-4xl font-bold w-full">Crochet Projects for Noodle Lovers</h1>
                    {/* Description recipe */}
                    <p className="text-sm text-slate-600 w-full">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
                    {/* Chef information */}
                    <div className="flex flex-row w-full items-center">
                        <div className="w-10 sm:w-16 h-10 sm:h-16 rounded-full overflow-hidden border border-black">
                            <img src={process.env.PUBLIC_URL + "/images/chef.png"} className="w-full h-full object-cover" alt="pictures" />
                        </div>
                        <div className="px-6 border-r border-slate-600">
                            <h1 className="text-sm sm:text-2xl font-bold ">Wade Warren</h1>
                        </div>
                        <div className="px-6">
                            <h1 className="text-sm sm:text-xl font-bold text-slate-600">12 November 2021</h1>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default BlogList;