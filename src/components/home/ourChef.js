// Module
import React from 'react'

const OurChef = () => {
    return (
        <div className='flex flex-row mt-24 w-full h-128'>
            {/* Information for call chef */}
            <div className='flex flex-col w-1/2 h-10/12 justify-center pr-20'>
                <h1 className='text-4xl font-bold'>Everyone can be a chef in their own kitchen</h1>
                <p className='mt-10'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div className='mt-14'>
                    <button className='bg-black text-white px-10 py-4 rounded-xl text-sm'>Learn more</button>
                </div>
            </div>
            {/* Chef image */}
            <div className='w-1/2 h-full bg-gradient-to-b from-white to-emerald-100 rounded-3xl'>
                <div className='flex w-full h-full'>
                    <img src={process.env.PUBLIC_URL + '/images/chef.png'} alt='chef' className='-ml-14 -mt-8 absolute object-cover w-150' />
                </div>
            </div>
        </div>
    )
}

export default OurChef;