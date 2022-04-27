// Module
import React from 'react';

// Files
import OneRecommendation from './oneRecommendation';

const RecipesRecommendation = () => {
    return(
        // Few recommendation
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 mt-10'>
            <OneRecommendation />
            <OneRecommendation />
            <OneRecommendation />
            <OneRecommendation />
        </div>
    );
};

export default RecipesRecommendation;