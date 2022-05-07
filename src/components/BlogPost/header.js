import React from "react";

const Header = () => {
    return(
        <div className="flex flex-col w-full">
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center">Full Guide to Becoming a Professional Chef</h1>
            <div className="flex w-full mt-4 justify-center">
                <div className="flex flex-row items-center">
                    <img src={process.env.PUBLIC_URL + "/images/chef.png"} className="h-8 w-8 object-cover rounded-full mx-2" alt="ellipse"/>
                    <span className="font-bold text-sm pr-8 border-r border-black">John Smith</span>
                    <span className="mx-4 text-sm text-gray-600">15 March 2022</span>
                </div>
            </div>
            <p className="text-sm text-gray-600 text-center mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.</p>
        </div>
    );
};

export default Header;