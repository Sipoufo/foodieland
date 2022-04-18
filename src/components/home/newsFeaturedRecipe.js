import React from "react";
import FeaturedRecipe from './featuredRecipe'

/**
 *  It content all presentation items
 *  He have the capacity to scroll vertically
 */
const NewsFeaturedRecipe = () => {
    return (
        /**
         *  content all features recipes
         *  important:
         *      - scrollbar-none here use for remove scrollbar to 
         */
        <div className="flex flex-row w-full overflow-x-auto snap-x mt-12 scrollbar-none">
            <FeaturedRecipe />
            <FeaturedRecipe />
            <FeaturedRecipe />
        </div>
    )
}

export default NewsFeaturedRecipe;