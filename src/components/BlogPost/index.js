// Module
import React from 'react';

// Files
import Header from './header';
import SubscribeCard from '../subscribeCard/subscribeCard';
import RecipesRecommendation from '../recommandations/RecipesRecommendation';
import Share from './share';
import BlogContent from './blogContent';

const IndexBlogPost = () => {
    return(
        <div className='flex mt-12 justify-center'>
            <div className='w-10/12 flex flex-col'>
                {/* Header */}
                <Header />
                {/* Mark Group */}
                <img src={process.env.PUBLIC_URL + "/images/cookPicture.png"} className='mt-10 w-full h-80 sm:h-128 object-cover rounded-2xl' alt='mark'/>
                {/* Blog and Share */}
                <div className='mt-12 flex flex-row gap-6 justify-between'>
                    <div className='grow flex'>
                        <BlogContent />
                    </div>
                    <div className='w-4/12 hidden lg:flex'>
                        <Share />
                    </div>
                </div>
                {/* subscription card */}
                <SubscribeCard />
                {/* Recommendation */}
                <div className='flex flex-col w-full mt-32'>
                    <div className='flex w-full justify-center items-center'>
                        <h1 className='text-2xl font-bold'>Check out the delicious recipe</h1>
                    </div>
                    <RecipesRecommendation />
                </div>
            </div>
        </div>
    );
};

export default IndexBlogPost;