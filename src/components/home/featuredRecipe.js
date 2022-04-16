// Modules
import React from "react";

/**
 *  This is a one presentation item
 */
const FeaturedRecipe = () => {
    return(
        /**
         *  Important:
         *      snap-center is used for center a active element to screen
         *      flex-shrink-0 use for ignore a flex parent
         */
        <div className="flex-shrink-0 h-full snap-center">
            <div className='bg-sky-100 flex flex-row justify-center w-70vw h-full rounded-6xl overflow-hidden ml-10 snap-start'>
                {/* Information about recipe */}
                <div className='flex w-1/2 h-full'></div>

                {/* Picture recipe */}
                <div className='flex w-1/2 h-full'>
                    <img src={process.env.PUBLIC_URL + '/images/Foods/food1.png'} alt='recipe' className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
        
    )
}

export default FeaturedRecipe;