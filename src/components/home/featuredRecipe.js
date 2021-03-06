// Modules
import React from "react";
import { useTranslation } from 'react-i18next'; // Translate module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Use for add icons
import { faStopwatch, faUtensils, faCirclePlay } from '@fortawesome/free-solid-svg-icons';//Use for import few icons

/**
 *  This is a one presentation item
 */
const FeaturedRecipe = () => {
    const { t } = useTranslation();
    return(
        /**
         *  Important:
         *      snap-center is used for center a active element to screen
         *      flex-shrink-0 use for ignore a flex parent
         */
        <div className="flex-shrink-0 h-full lg:h-128 xl:h-160 2xl:h-[800px] snap-center">
            <div className='bg-sky-100 flex flex-row justify-center w-70vw h-full rounded-6xl overflow-hidden mx-5 snap-start'>
                {/* Information about recipe */}
                <div className='flex flex-col w-11/12 lg:w-1/2 h-full p-8'>
                    <div className='flex flex-row bg-white w-40 p-2 rounded-3xl shadow-lg'>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/images/widgets/parchment.png'} alt='recipe' className="object-cover"/>
                        </div>
                        <div className='ml-2 text-lg'>
                            <p>Hot Recipes</p>
                        </div>
                    </div>
                    <div className="text-2xl sm:text-5xl xl:text-7xl mt-6 font-bold">
                        Spicy delicious chicken wings
                    </div>
                    <div className="mt-6 text-sm xl:text-xl">
                        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    </div>
                    <div className="flex flex-row text-sm mt-6 justify-between w-full sm:w-4/6 lg:w-4/5 xl:w-6/12">
                        <div className="flex flex-row bg-gray-300 items-center p-2 rounded-3xl">
                            <FontAwesomeIcon className='text-xs sm:text-lg mx-1 sm:mx-3' icon={faStopwatch} />
                            <div className="text-xs sm:text-sm mr-1 sm:mr-3">
                                <p>30 Minutes</p>
                            </div>
                        </div>
                        <div className="flex flex-row bg-gray-300 items-center p-2 rounded-3xl">
                            <FontAwesomeIcon className='text-xs sm:text-lg mx-1 sm:mx-3' icon={faUtensils} />
                            <div className="text-xs sm:text-sm mr-1 sm:mr-3">
                                <p>{t('navbar.chicken')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 flex fex-row justify-between">
                        <div className="flex flex-row">
                            <img src={process.env.PUBLIC_URL + '/images/cooks/johnsmith.png'} alt='recipe' className="object-cover hidden sm:flex"/>
                            <div className="flex flex-col ml-2 h-full">
                                <span>John Smith</span>
                                <span>15 March 2022</span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center rounded-3xl bg-black text-white p-4">
                            <p className="hidden sm:flex">{t('navbar.viewRecipes')}</p>
                            <FontAwesomeIcon className='text-lg mx-3' icon={faCirclePlay} />
                        </div>
                    </div>
                </div>

                {/* Picture recipe */}
                <div className='hidden lg:flex w-1/2'>
                    <img src={process.env.PUBLIC_URL + '/images/Foods/food1.png'} alt='recipe' className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
        
    )
}

export default FeaturedRecipe;