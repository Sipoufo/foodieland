import React from "react";

const BlogList = () => {
    return(
            <div className="flex flex-row gap-6">
                {/* Food image */}
                <div className="w-6/12 h-36 hidden sm:flex">
                    <img src={process.env.PUBLIC_URL + "/images/Foods/food12.png"} className='w-full h-full object-cover rounded-3xl' alt="food" />
                </div>
                <div className="grow flex flex-col w-full h-full justify-start gap-2 border border-black p-2 rounded-2xl sm:border-0 sm:p-0">
                    {/* recite name */}
                    <a href="/blog-post" className="text-lg sm:text-2xl font-bold w-full">Crochet Projects for Noodle Lovers</a>
                    {/* Description recipe */}
                    <p className="text-sm text-slate-600 w-full">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
                    {/* Chef information */}
                    <div className="flex flex-row w-full items-center">
                        <div className="w-5 sm:w-8 h-5 sm:h-8 rounded-full overflow-hidden border border-black">
                            <img src={process.env.PUBLIC_URL + "/images/chef.png"} className="w-full h-full object-cover" alt="pictures" />
                        </div>
                        <div className="px-6 border-r border-slate-600">
                            <h1 className="text-sm sm:text-base font-bold ">Wade Warren</h1>
                        </div>
                        <div className="px-6">
                            <h1 className="text-sm sm:text-base font-bold text-slate-600">12 November 2021</h1>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default BlogList;