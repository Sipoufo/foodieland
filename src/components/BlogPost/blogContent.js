import React from "react";

const BlogContent = () => {
    return(
        <div className="flex flex-col w-full gap-10 px-4">
            <div className="flex flex-col gap-4">
                <h1 className="text-sm font-semibold">How did you start out in the food industry?</h1>
                <p className="text-xs text-gray-600 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-sm font-semibold">What do you like most about your job?</h1>
                <p className="text-xs text-gray-600 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-sm font-semibold">Do you cook at home on your days off?</h1>
                <img src={process.env.PUBLIC_URL + "/images/cookPicture.png"} className='w-full h-52 sm:h-72 object-cover rounded-2xl' alt="illustrator" />
                <p className="text-xs text-gray-600 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-sm font-semibold">What would your advice be to young people looking to get their foot in the door?</h1>
                <p className="text-xs text-gray-600 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
            </div>
            <div className="flex flex-col gap-4 bg-gradient-to-l to-stone-300 from-white p-5">
                <p className="text-xl font-semibold italic">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”</p>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-sm font-semibold">What is the biggest misconception that people have about being a professional chef?</h1>
                <p className="text-xs text-gray-600 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
            </div>
        </div>
    );
};

export default BlogContent;