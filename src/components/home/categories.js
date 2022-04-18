// Modules
import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 *  This is a presentation on few categories
 */
const Categories = () => {
    const {t} = useTranslation();
    return(
        /**
         *  Important:
         *      blur is used blur a picture or a items
         *      grid is used for display items to a grid
         */
        <div className='flex flex-col w-full'>
            <div className='flex flex-row justify-between items-center w-full'>
                <span className='text-xl sm:text-3xl font-bold'>Categories</span>
                <a href='/' className='bg-sky-100 p-1 sm:p-3 rounded-2xl'>View all categories</a>
            </div>
            {/* div that contains categories */}
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mt-5 mx-5 lg:mx-0 justify-between'>
                <div className='flex justify-center'>
                    <img className='hidden lg:flex w-20 absolute z-30 mt-0' src={process.env.PUBLIC_URL + '/images/Categories/breakfast.png'} alt='category' />
                    <div className='flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 p-4 lg:p-6 rounded-2xl'>
                        <div className='lg:mt-2'>
                            <img className='hidden lg:flex w-20 blur-lg' src={process.env.PUBLIC_URL + '/images/Categories/breakfast.png'} alt='category' />
                            <span className='mt-5 text-sm lg:text-lg font-bold'>{t('navbar.breakfast')}</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img className='hidden lg:flex w-20 absolute z-30 mt-0' src={process.env.PUBLIC_URL + '/images/Categories/vegan.png'} alt='category' />
                    <div className='flex flex-col justify-center items-center bg-gradient-to-b from-white to-green-100 p-6 rounded-2xl'>
                        <div className='mt-2'>
                            <img className='hidden lg:flex w-20 blur-lg' src={process.env.PUBLIC_URL + '/images/Categories/vegan.png'} alt='category' />
                            <span className='mt-5 text-sm lg:text-lg font-bold'>{t('navbar.breakfast')}</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img className='hidden lg:flex w-20 absolute z-30 mt-0' src={process.env.PUBLIC_URL + '/images/Categories/meat.png'} alt='category' />
                    <div className='flex flex-col justify-center items-center bg-gradient-to-b from-white to-red-100 p-6 rounded-2xl'>
                        <div className='mt-2'>
                            <img className='hidden lg:flex w-20 blur-lg' src={process.env.PUBLIC_URL + '/images/Categories/meat.png'} alt='category' />
                            <span className='mt-5 text-sm lg:text-lg font-bold'>{t('navbar.breakfast')}</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img className='hidden lg:flex w-20 absolute z-30 mt-0' src={process.env.PUBLIC_URL + '/images/Categories/dessert.png'} alt='category' />
                    <div className='flex flex-col justify-center items-center bg-gradient-to-b from-white to-orange-100 p-6 rounded-2xl'>
                        <div className='mt-2'>
                            <img className='hidden lg:flex w-20 blur-lg' src={process.env.PUBLIC_URL + '/images/Categories/dessert.png'} alt='category' />
                            <span className='mt-5 text-sm lg:text-lg font-bold'>{t('navbar.breakfast')}</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img className='hidden lg:flex w-20 absolute z-30 mt-0' src={process.env.PUBLIC_URL + '/images/Categories/lunch.png'} alt='category' />
                    <div className='flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 p-6 rounded-2xl'>
                        <div className='mt-2'>
                            <img className='hidden lg:flex w-20 blur-lg' src={process.env.PUBLIC_URL + '/images/Categories/lunch.png'} alt='category' />
                            <span className='mt-5 text-sm lg:text-lg font-bold'>{t('navbar.breakfast')}</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img className='hidden lg:flex w-20 absolute z-30 mt-0' src={process.env.PUBLIC_URL + '/images/Categories/chocolate.png'} alt='category' />
                    <div className='flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 p-6 rounded-2xl'>
                        <div className='mt-2'>
                            <img className='hidden lg:flex w-20 blur-lg' src={process.env.PUBLIC_URL + '/images/Categories/chocolate.png'} alt='category' />
                            <span className='mt-5 text-sm lg:text-lg font-bold'>{t('navbar.breakfast')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;