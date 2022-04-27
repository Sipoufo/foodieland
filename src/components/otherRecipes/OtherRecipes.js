import React from 'react';

const OtherRecipes = () => {
    return(
        <div className='flex flex-col w-full'>
            <span className='text-xl font-bold'>Other Recipes</span>
            <div className='flex flex-col mt-4 gap-2 w-full'>
                <div className='flex flex-row w-full gap-2'>
                    <div className='w-1/2 h-32'>
                        <img src={process.env.PUBLIC_URL + "/images/Foods/food3.png"} className='h-full w-full object-cover rounded-2xl' alt='food_recipes' />
                    </div>
                    <div className='flex flex-col w-full justify-center'>
                        <span className='text-lg font-semibold'>Chicken Meatball with Creamy Chees...</span>
                        <span className='text-sm mt-2'>By Andreas Paula</span>
                    </div>
                </div>
                <div className='flex flex-row w-full gap-2'>
                    <div className='w-1/2 h-32'>
                        <img src={process.env.PUBLIC_URL + "/images/Foods/food4.png"} className='h-full w-full object-cover rounded-2xl' alt='food_recipes' />
                    </div>
                    <div className='flex flex-col w-full justify-center'>
                        <span className='text-lg font-semibold'>Chicken Meatball with Creamy Chees...</span>
                        <span className='text-sm mt-2'>By Andreas Paula</span>
                    </div>
                </div>
                <div className='flex flex-row w-full gap-2'>
                    <div className='w-1/2 h-32'>
                        <img src={process.env.PUBLIC_URL + "/images/Foods/food6.png"} className='h-full w-full object-cover rounded-2xl' alt='food_recipes' />
                    </div>
                    <div className='flex flex-col w-full justify-center'>
                        <span className='text-lg font-semibold'>Chicken Meatball with Creamy Chees...</span>
                        <span className='text-sm mt-2'>By Andreas Paula</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherRecipes;