// Modules
import React from 'react';
import { useTranslation } from 'react-i18next';// use for a translation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Use for add icons
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Use for import different brands icons


/**
 * This function is use for create a footer
 * It content :
 *  - logo
 *  - list of navigation items
 *  - social logo
 *  - creator name
 */
const Footer = () => {
    const {t} = useTranslation();

    return (
        <div className='flex w-full mt-20 justify-center'>
            <div className='flex flex-col w-10/12'>
                <div className='flex flex-row items-center justify-between w-full'>
                    <div className='flex flex-col justify-start'>
                        {/* Logo */}
                        <img className='w-36 lg:w-32 xl:w-40' src={process.env.PUBLIC_URL + '/images/Logos/logo_sm.png'} alt='logo' />
                        <span>Lorem ipsum dolor sit amet, consectetuipisicing elit, </span>
                    </div>
                    <div className='flex flex-col w-10/12 lg:w-5/12'>
                        <ul className='flex justify-between text-sm xl:text-lg'>
                            <li>{t('navbar.home')}</li>
                            <li>{t('navbar.recipes')}</li>
                            <li>{t('navbar.blog')}</li>
                            <li>{t('navbar.contact')}</li>
                            <li>{t('navbar.aboutUs')}</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-10'>
                    <hr className='border-gray-400' />
                </div>
                <div className='flex flex-row mt-10 mb-10'>
                    <div className='flex w-7/12 justify-end'>
                        <span>© 2020 Flowbase. Powered by Sipoufo Yvan</span>
                    </div>
                    <div className='flex justify-end w-5/12'>
                        {/* Social items */}
                        <div className='hidden sm:flex flex-col'>
                            <ul className='flex'>
                                <li><FontAwesomeIcon className='text-xl mx-3' icon={faFacebookF} /></li>
                                <li><FontAwesomeIcon className='text-xl mx-3' icon={faTwitter} /></li>
                                <li><FontAwesomeIcon className='text-xl mx-3' icon={faInstagram} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;