import React from 'react';
import NewsFeaturedRecipe from './newsFeaturedRecipe';
import Categories from './categories';//few Categories
import FewRecipes from './fewRecipes';//few recipes
import OurChef from './ourChef';

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
        </>
    )
}

export default Navbar;