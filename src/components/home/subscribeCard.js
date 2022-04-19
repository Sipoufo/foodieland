// Modules
import React from 'react'

const SubscribeCard = () => {
    return(
        /**
         *  Important:
         *      Translate : use for doing translations movements
         */
        <div className='flex flex-row w-full overflow-hidden h-80 justify-between bg-emerald-50 rounded-6xl'>
            {/* left picture */}
            <div className='w-3/12 hidden lg:flex'>
                <img src={process.env.PUBLIC_URL + '/images/Foods/food0_2.png'} className='object-cover w-80 h-96 rotate-12 -translate-x-8 translate-y-40' alt='food' />
            </div>
            {/* Information for subscribe */}
            <div className='w-full p-4 lg:p-0 lg:w-5/12 flex '>
                <div className='w-full flex flex-col items-center justify-center text-center'>
                    <h1 className='font-bold text-3xl'>Deliciousness to your inbox</h1>
                    <p className='mt-5 text-xs'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    <div className='flex flex-row w-10/12 mt-10 bg-white p-3 rounded-3xl justify-between'>
                        <input className='w-7/12 mx-2 px-2' placeholder='Your email address' />
                        <button className='w-5/12 text-white text-[0.60rem] bg-black px-5 py-3 rounded-xl'>Subscribe</button>
                    </div>
                </div>
            </div>
            {/* Right picture */}
            <div className='w-3/12 hidden lg:flex'>
                    <img src={process.env.PUBLIC_URL + '/images/Foods/food0_1.png'} className='object-none object-left-top w-full h-full translate-x-10 translate-y-36' alt='food' />
            </div>
        </div>
    )
}

export default SubscribeCard;