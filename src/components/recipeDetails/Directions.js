import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const Directions = () => {
    return(
        <div className='flex flex-col w-full mt-16'>
            {/* Title */}
            <div className='flex text-4xl font-bold'>
                <span>Directions</span>
            </div>
            <div className='flex flex-col gap-6 mt-6'>
                <div className='flex flex-row gap-4'>
                    <div className='flex-none'>
                        <FontAwesomeIcon icon={faCircle} className='text-xl mt-1' />
                    </div>
                    <div className='grow'>
                        <span className='text-xl font-semibold'>1. Lorem ipsum dolor sit amet</span>
                        <p className='text-sm mt-2 text-gray-500'>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                        <div className='flex w-full h-64 mt-4 items-center'>
                            <img src={process.env.PUBLIC_URL + '/images/cookPicture.png'} className='rounded-2xl w-full h-full object-cover' alt='Picture_Direction' />
                        </div>
                    </div>
                </div>
                <hr className='w-full border-gray-200' />
                <div className='flex flex-row gap-4'>
                    <div className='flex-none'>
                        <FontAwesomeIcon icon={faCircle} className='text-xl mt-1' />
                    </div>
                    <div className='grow'>
                        <span className='text-xl font-semibold'>2. Lorem ipsum dolor sit amet</span>
                        <p className='text-sm mt-2 text-gray-500'>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                    </div>
                </div>
                <hr className='w-full border-gray-200' />
                <div className='flex flex-row gap-4'>
                    <div className='flex-none'>
                        <FontAwesomeIcon icon={faCircle} className='text-xl mt-1' />
                    </div>
                    <div className='grow'>
                        <span className='text-xl font-semibold'>3. Lorem ipsum dolor sit amet</span>
                        <p className='text-sm mt-2 text-gray-500'>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                    </div>
                </div>
                <hr className='w-full border-gray-200' />
            </div>
        </div>
    );
};

export default Directions;