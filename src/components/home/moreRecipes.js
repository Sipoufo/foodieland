// Modules
import React from 'react';
import { useTranslation } from 'react-i18next';

// Files
import OneRecipe from './oneRecipe'

const MoreRecipes = () => {
    const {t} = useTranslation();
    return (
        <div className='flex w-full flex-col'>
            {/* Introduction part */}
            <div className='flex w-full flex-row'>
                <div className='w-1/2 flex justify-start'>
                    <h1 className='text-4xl font-bold'>{t('navbar.introductionMoreReipes')}</h1>
                </div>
                <div className='w-1/2 flex justify-start'>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
            </div>
            {/* Recipes part */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8'>
                <OneRecipe />
                <OneRecipe />
                <OneRecipe />
                <OneRecipe />
                <OneRecipe />
                <OneRecipe />
                <OneRecipe />
                <OneRecipe />
            </div>
        </div>
    )
}

export default MoreRecipes;