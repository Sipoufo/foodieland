//Modules
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Use for add icons
import { faStopwatch, faUtensils } from '@fortawesome/free-solid-svg-icons';//use for import few icons
import { useTranslation } from 'react-i18next';

const OneRecipe = () => {
    const {t} = useTranslation();
    return(
        <div className='flex flex-col rounded-2xl w-full p-4 h-96 bg-gradient-to-b from-white to-sky-100'>
            <div className='w-full h-4/6'>
                <img className='h-full w-full object-cover rounded-2xl' src={process.env.PUBLIC_URL + '/images/Foods/food2.png'} alt='category' />
            </div>
            <div className='w-full h-2/6 mt-3'>
                <p className='text-lg font-bold'>Big and Juicy Wagyu Beef Cheeseburger</p>
                <div className='flex flex-row w-full justify-start mt-4'>
                    <div className="flex flex-row text-sm w-9/12 justify-between">
                        <div className="flex flex-row items-center p-2 rounded-3xl">
                            <FontAwesomeIcon className='text-lg mx-1 sm:mx-3' icon={faStopwatch} />
                            <div className="text-sm mr-1 sm:mr-3">
                                <p>30 Minutes</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center p-2 rounded-3xl">
                            <FontAwesomeIcon className='text-lg sm:text-lg mx-1 sm:mx-3' icon={faUtensils} />
                            <div className="text-sm mr-1 sm:mr-3">
                                <p>{t('navbar.chicken')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneRecipe;