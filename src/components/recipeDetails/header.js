import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Use for add icons
import { faStopwatch, faUtensils, faPrint, faArrowUpFromBracket, faPlay } from '@fortawesome/free-solid-svg-icons';//Use for import few icons

const Header = () => {
    return (
        <div className='flex flex-col w-full'>
            {/* Cook information and print or download option */}
            <div className='flex flex-row w-full justify-between'>
                <div className='flex flex-col w-full sm:w-8/12'>
                    <h1 className='text-5xl font-bold'>Health Japanese Fried Rice</h1>
                    <div className='flex flex-row w-full mt-14'>
                        {/* Chef information */}
                        <div className="flex flex-row w-1/4 lg:w-2/5 justify-start border-r-2 border-gray-200">
                            <img src={process.env.PUBLIC_URL + '/images/cooks/johnsmith.png'} alt='recipe' className="object-cover hidden lg:flex"/>
                            <div className="flex flex-col ml-4 h-full text-sm items-center justify-center">
                                <span>John Smith</span>
                                <span>15 March 2022</span>
                            </div>
                        </div>
                        {/* Preparation tim */}
                        <div className="flex flex-row w-1/4 lg:w-1/5 justify-center border-r-2 border-gray-200 items-center">
                            <FontAwesomeIcon icon={faStopwatch} className='text-2xl hidden lg:flex' />
                            <div className="flex flex-col ml-4 h-full text-sm items-center justify-center">
                                <span>PREP TIME</span>
                                <span>15 Minutes</span>
                            </div>
                        </div>
                        {/* Cook time */}
                        <div className="flex flex-row w-1/4 lg:w-1/5 justify-center border-r-2 border-gray-200 items-center">
                            <FontAwesomeIcon icon={faStopwatch} className='text-2xl hidden lg:flex' />
                            <div className="flex flex-col ml-4 h-full text-sm items-center justify-center">
                                <span>JCOOK TIME</span>
                                <span>15 Minutes</span>
                            </div>
                        </div>
                        {/* Type cooling */}
                        <div className="flex flex-row w-1/4 lg:w-1/5 justify-center border-r-2 border-gray-200 items-center">
                            <FontAwesomeIcon icon={faUtensils} className='text-2xl hidden lg:flex' />
                            <div className="flex flex-col ml-4 h-full text-sm items-center justify-center">
                                <span>Chicken</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden sm:flex flex-col w-3/12 justify-center items-center lg:items-end'>
                    <div className='flex flex-col lg:flex-row w-5/6 lg:w-3/6 justify-center items-center gap-2'>
                        {/* Print option */}
                        <div className='w-full lg:w-1/2 flex justify-center lg:justify-center'>
                            <div className='p-6 rounded-full flex justify-center bg-emerald-100'>
                                <FontAwesomeIcon icon={faPrint} className='text-lg lg:text-2xl' />
                            </div>
                        </div>
                        {/* download option */}
                        <div className='w-full lg:w-1/2 flex justify-center lg:justify-center'>
                            <div className='p-6 rounded-full flex justify-center bg-emerald-100'>
                                <FontAwesomeIcon icon={faArrowUpFromBracket} className='text-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* video and ingredients */}
            <div className='flex flex-row w-full justify-between h-128 mt-5 gap-6'>
                {/* Food video */}
                <div className='relative flex w-full sm:w-8/12 h-full rounded-3xl overflow-hidden'>
                    <div className='absolute flex justify-center items-center w-full h-full'>
                        <div className='justify-center items-center flex p-8 bg-gray-100 opacity-80 rounded-full'>
                            <FontAwesomeIcon icon={faPlay} className='text-2xl h-4 w-4' />
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/images/Foods/food12.png"} className='w-full h-full object-cover object-center' alt='FoodRecipe' />
                </div>
                {/* Food ingredients */}
                <div className='hidden sm:flex flex-col w-4/12 rounded-3xl bg-emerald-100 p-6 justify-between'>
                    <div className='flex flex-col w-full'>
                        <div className='flex w-full'>
                            <h1 className='font-bold text-2xl'>Nutrition information</h1>
                        </div>
                        <div className='flex flex-col gap-3 text-sm mt-6'>
                            <div className='flex w-full justify-between'>
                                <span className='text-slate-500'>Chocolate</span>
                                <span>100g</span>
                            </div>
                            <hr className='w-full border border-slate-300' />
                            <div className='flex w-full justify-between'>
                                <span className='text-slate-500'>Chocolate</span>
                                <span>100g</span>
                            </div>
                            <hr className='w-full border border-slate-300' />
                            <div className='flex w-full justify-between'>
                                <span className='text-slate-500'>Chocolate</span>
                                <span>100g</span>
                            </div>
                            <hr className='w-full border border-slate-300' />
                            <div className='flex w-full justify-between'>
                                <span className='text-slate-500'>Chocolate</span>
                                <span>100g</span>
                            </div>
                            <hr className='w-full border border-slate-300' />
                            <div className='flex w-full justify-between'>
                                <span className='text-slate-500'>Chocolate</span>
                                <span>100g</span>
                            </div>
                            <hr className='w-full border border-slate-300' />
                            <div className='flex w-full justify-between'>
                                <span className='text-slate-500'>Chocolate</span>
                                <span>100g</span>
                            </div>
                            <hr className='w-full border border-slate-300' />
                            <div className='flex w-full justify-between'>
                                <span className='text-slate-500'>Chocolate</span>
                                <span>100g</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex text-sm text-slate-500'>
                        <p>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
            </div>
            {/* Food description */}
            <div className='flex text-sm mt-16 text-slate-400'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}

export default Header