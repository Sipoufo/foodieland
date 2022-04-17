import React from 'react';
import NewsFeaturedRecipe from './newsFeaturedRecipe';
import Categories from './categories';

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
                    <Categories />
                </div>
            </div>
        </>
    )
}

export default Navbar;