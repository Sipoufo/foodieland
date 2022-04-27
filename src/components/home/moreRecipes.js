// Modules
import React from 'react';
import { useTranslation } from 'react-i18next';

// Files
import RecipesRecommendation from '../recommandations/RecipesRecommendation';

const MoreRecipes = () => {
    const {t} = useTranslation();
    return (
        <div className='flex w-full flex-col'>
            {/* Introduction part */}
            <div className='flex w-full flex-row gap-10'>
                <div className='w-1/2 flex justify-start'>
                    <h1 className='text-4xl font-bold'>{t('navbar.introductionMoreReipes')}</h1>
                </div>
                <div className='w-1/2 flex justify-start'>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
            </div>
            {/* Recipes part */}
            <RecipesRecommendation />
        </div>
    )
}

export default MoreRecipes;