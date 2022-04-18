// Modules
import React from 'react'
import { useTranslation } from 'react-i18next';//Use for translation

// file
import OneRecipe from './oneRecipe';

const FewRecipes = () => {
    const {t} = useTranslation();
    return(
        <div className='flew flew-col mt-24'>
            <div className='w-full flex justify-center items-center'>
                <span className='font-bold text-2xl'>{t('navbar.simpleAndTastyRecipes')}</span>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className='w-6/12'>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
            </div>
            <div className='mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8'>
                <OneRecipe />
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

export default FewRecipes;