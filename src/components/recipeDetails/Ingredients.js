// Modules
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';


const Ingredients = () => {
    return(
        <div className='flex flex-col w-full'>
            {/* Title */}
            <div className='flex text-4xl font-bold'>
                <span>Ingredients</span>
            </div>
            {/* Part */}
            <div className='flex flex-col mt-8'>
                <div className='flex text-xl font-semibold'>
                    <span>For main dish</span>
                </div>

                <div className='flex flex-col mt-6 text-sm gap-6'>
                    <div className='flex flex-row gap-4'>
                        <div className='flex-none'>
                            <FontAwesomeIcon icon={faCircleCheck} className='text-xl' />
                        </div>
                        <div className='grow'>
                            <span>Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                    <hr className='w-full border-gray-200' />

                    <div className='flex flex-row gap-2'>
                        <div className='flex-none'>
                            <FontAwesomeIcon icon={faCircle} className='text-xl' />
                        </div>
                        <div className='grow'>
                            <span>Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                    <hr className='w-full border-gray-200' />

                    <div className='flex flex-row gap-4'>
                        <div className='flex-none'>
                            <FontAwesomeIcon icon={faCircle} className='text-xl' />
                        </div>
                        <div className='grow'>
                            <span>Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                    <hr className='w-full border-gray-200' />

                    <div className='flex flex-row gap-4'>
                        <div className='flex-none'>
                            <FontAwesomeIcon icon={faCircle} className='text-xl' />
                        </div>
                        <div className='grow'>
                            <span>Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                    <hr className='w-full border-gray-200' />

                    <div className='flex flex-row gap-4'>
                        <div className='flex-none'>
                            <FontAwesomeIcon icon={faCircle} className='text-xl' />
                        </div>
                        <div className='grow'>
                            <span>Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                    <hr className='w-full border-gray-200' />
                </div>
            </div>

            <div className='flex flex-col mt-8'>
                <div className='flex text-xl font-semibold'>
                    <span>For the sauce</span>
                </div>

                <div className='flex flex-col mt-6 text-sm gap-6'>
                    <div className='flex flex-row gap-4'>
                        <div className='flex-none'>
                            <FontAwesomeIcon icon={faCircle} className='text-xl' />
                        </div>
                        <div className='grow'>
                            <span>Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                    <hr className='w-full border-gray-200' />

                    <div className='flex flex-row gap-4'>
                        <div className='flex-none'>
                            <FontAwesomeIcon icon={faCircle} className='text-xl' />
                        </div>
                        <div className='grow'>
                            <span>Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                    <hr className='w-full border-gray-200' />

                    <div className='flex flex-row gap-4'>
                        <div className='flex-none'>
                            <FontAwesomeIcon icon={faCircle} className='text-xl' />
                        </div>
                        <div className='grow'>
                            <span>Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                    <hr className='w-full border-gray-200' />

                    <div className='flex flex-row gap-4'>
                        <div className='flex-none'>
                            <FontAwesomeIcon icon={faCircle} className='text-xl' />
                        </div>
                        <div className='grow'>
                            <span>Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                    <hr className='w-full border-gray-200' />
                    
                    <div className='flex flex-row gap-4'>
                        <div className='flex-none'>
                            <FontAwesomeIcon icon={faCircle} className='text-xl' />
                        </div>
                        <div className='grow'>
                            <span>Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                    <hr className='w-full border-gray-200' />
                </div>
            </div>
        </div>
    );
};

export default Ingredients;