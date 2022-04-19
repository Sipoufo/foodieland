// Modules
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Use for add icons
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons';// use for import specific icons

const PageInstagram = () => {
    return(
        <div className='w-full flex flex-col'>
            {/* Header instagram page */}
            <div className='w-full flex flex-row justify-between bg-white p-2'>
                <div className='w-10/12 flex flex-row justify-start'>
                    <img src={process.env.PUBLIC_URL + '/images/Logos/logoCircle.png'} alt='chef' className='object-cover m-2' />
                    <div className='flex flex-col ml-2'>
                        <span className='font-bold text-sm'>Foodieland</span>
                        <p className='text-xs'>Tokyo, Japan</p>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <span className='font-bold text-lg'>...</span>
                </div>
            </div>
            {/* Pictures instagram page */}
            <div className='flex w-full h-72'>
                <img src={process.env.PUBLIC_URL + '/images/Foods/food8.png'} alt='chef' className='object-cover w-full' />
                <div className='flex justify-end'>
                    <span className='absolute bg-gray-500 rounded-xl px-2 py-1 m-4 text-xs text-white'>
                        1/3
                    </span>
                </div>
            </div>
            <div className='flex flex-col w-full px-3 bg-white'>
                {/* Buttons instagram page */}
                <div className='flex flex-row w-full justify-between items-center'>
                    <div className='flex flex-row justify-between w-4/12 xl:w-3/12'>
                        <FontAwesomeIcon className='text-lg' icon={faHeart} />
                        <FontAwesomeIcon className='text-lg' icon={faComment} />
                        <FontAwesomeIcon className='text-lg' icon={faPaperPlane} />
                    </div>
                    <div className='flex justify-center w-3/12 items-start h-14'>
                        <span className='text-[2rem] h-1/3 text-blue-400'>.</span>
                        <span className='text-[2rem] h-1/3 text-gray-400'>.</span>
                        <span className='text-[2rem] h-1/3 text-gray-400'>.</span>
                    </div>
                    <div className='flex justify-end w-3/12'>
                        <FontAwesomeIcon className='text-lg' icon={faBookmark} />
                    </div>
                </div>
                {/* Information instagram page */}
                <div className='flex flex-col w-full mt-1'>
                    <p className='text-xs'>Liked by craig_love and 44,686 others</p>
                    <p className='text-xs'>Foodieland. The vegetables dishes need to have certain vitamin for those people</p>
                </div>
                <div className='flex my-2 text-xs text-gray-400'>
                    April 2022
                </div>
            </div>
        </div>
    )
};

export default PageInstagram;