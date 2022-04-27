import React from 'react';

// Files
import Header from './header';
import Ingredients from './Ingredients';
import Directions from './Directions';
import SubscribeCard from '../subscribeCard/subscribeCard';
import OtherRecipes from '../otherRecipes/OtherRecipes';
import RecipesRecommendation from '../recommandations/RecipesRecommendation';

const IndexRecipeDetails = () => {
    return(
        <div className='mt-12 flex justify-center'>
            <div className='w-10/12 flex flex-col'>
                {/* Header of recipe detail */}
                <Header />
                <div className='flex flex-row w-full mt-16 gap-6'>
                    {/* Detail Recipes */}
                    <div className='flex flex-col w-full sm:w-8/12'>
                        {/* Detail recipe */}
                        <Ingredients />
                        {/* Directions */}
                        <Directions />
                    </div>
                    {/* Other Recipes */}
                    <div className='hidden sm:flex flex-col sm:w-4/12'>
                        {/* Other Recipes */}
                        <OtherRecipes />
                    </div>
                </div>
                {/* subscription card */}
                <SubscribeCard />
                {/* Recommendation */}
                <div className='flex flex-col w-full mt-32'>
                    <div className='flex w-full justify-center items-center'>
                        <h1 className='text-2xl font-bold'>You may like these recipe too</h1>
                    </div>
                    <RecipesRecommendation />
                </div>
            </div>
        </div>
    )
}

export default IndexRecipeDetails;

