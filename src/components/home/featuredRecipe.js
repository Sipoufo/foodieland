// Modules
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Use for add icons
import { faStopwatch, faUtensils, faCirclePlay } from '@fortawesome/free-solid-svg-icons'

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
        <div className="flex-shrink-0 h-full lg:h-128 snap-center">
            <div className='bg-sky-100 flex flex-row justify-center w-70vw h-full rounded-6xl overflow-hidden ml-10 snap-start'>
                {/* Information about recipe */}
                <div className='flex flex-col w-1/2 h-full p-8'>
                    <div className='flex flex-row bg-white w-40 p-2 rounded-3xl shadow-lg'>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/images/widgets/parchment.png'} alt='recipe' className="object-cover"/>
                        </div>
                        <div className='ml-2 text-lg'>
                            <p>Hot Recipes</p>
                        </div>
                    </div>
                    <div className="text-5xl mt-6 font-mono">
                        Spicy delicious chicken wings
                    </div>
                    <div className="mt-6 text-sm">
                        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    </div>
                    <div className="flex flex-row text-sm mt-6 justify-between w-full lg:w-4/5 xl:w-3/5">
                        <div className="flex flex-row bg-gray-300 items-center p-2 rounded-3xl">
                            <FontAwesomeIcon className='text-lg mx-3' icon={faStopwatch} />
                            <div className="text-sm mr-3">
                                <p>30 Minutes</p>
                            </div>
                        </div>
                        <div className="flex flex-row bg-gray-300 items-center p-2 rounded-3xl">
                            <FontAwesomeIcon className='text-lg mx-3' icon={faUtensils} />
                            <div className="text-sm mr-3">
                                <p>Chicken</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 flex fex-row justify-between">
                        <div className="flex flex-row">
                            <img src={process.env.PUBLIC_URL + '/images/cooks/johnsmith.png'} alt='recipe' className="object-cover"/>
                            <div className="flex flex-col ml-2 h-full">
                                <span>John Smith</span>
                                <span>15 March 2022</span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center rounded-3xl bg-black text-white p-4">
                            <p>view Recipes</p>
                            <FontAwesomeIcon className='text-lg mx-3' icon={faCirclePlay} />
                        </div>
                    </div>
                </div>

                {/* Picture recipe */}
                <div className='flex w-1/2'>
                    <img src={process.env.PUBLIC_URL + '/images/Foods/food1.png'} alt='recipe' className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
        
    )
}

export default FeaturedRecipe;