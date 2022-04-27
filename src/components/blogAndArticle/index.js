// Modules
import React from 'react';

// Files
import Header from './header';
import OtherRecipes from '../otherRecipes/OtherRecipes';
import BlogList from './blogList';
import SubscribeCard from '../subscribeCard/subscribeCard';
import Selection from './selection';

const IndexBlogAndArticle = () => {
    return(
        <div className='mt-12 flex justify-center'>
            <div className='w-10/12 flex flex-col'>
                {/* Header of blog and Article part */}
                <Header/>
                {/* Recipes information */}
                <div className='mt-24 flex flex-row w-full gap-6'>
                    <div className='flex flex-col grow relative gap-6'>
                        <BlogList />
                        <BlogList />
                        <BlogList />
                        <BlogList />
                        <BlogList />
                        <BlogList />
                    </div>
                    {/* Tasty Recipe */}
                    <div className='hidden lg:flex flex-col lg:w-4/12'>
                        <OtherRecipes />
                    </div>
                </div>
                {/* Selection */}
                <div className='flex w-full justify-center items-center mt-24'>
                    <div className='flex'>
                        <Selection />
                    </div>
                </div>
                {/* subscription card */}
                <SubscribeCard />
            </div>
        </div>
    );
};

export default IndexBlogAndArticle;