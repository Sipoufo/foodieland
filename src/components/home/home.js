// Module
import React from 'react';

// Files
import NewsFeaturedRecipe from './newsFeaturedRecipe';
import Categories from './categories';//Few Categories
import FewRecipes from './fewRecipes';//Few recipes
import OurChef from './ourChef';//Call chef
import Instagram from './instagram';//Instagram pages
import SubscribeCard from './subscribeCard';// Subscription page
import MoreRecipes from './moreRecipes';

/**
 * This function is use for web start point
 * It content all items of page
 */
const Navbar = () => {
    return(
        // part for news features recipes
        <>
            <NewsFeaturedRecipe />
            <div className='flex w-full mt-20 justify-center'>
                <div className='flex flex-col w-10/12'>
                    {/* content few categories and a button for all categories */}
                    <Categories />
                    {/* Content few recipes */}
                    <FewRecipes />
                    {/* Content part: a chef in own kitchen */}
                    <OurChef />
                </div>
            </div>
            <div className='flex flex-col w-full'>
                {/* Content instagram recipes pages */}
                <Instagram />
            </div>
            <div className='flex w-full mt-24 justify-center'>
                <div className='flex flex-col w-10/12'>
                    {/* Content More recipes */}
                    <MoreRecipes />
                    {/* Content input for subscribe by email */}
                    <SubscribeCard />
                </div>
            </div>
        </>
    )
}

export default Navbar;