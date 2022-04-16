// Modules
import React from 'react';
import { useTranslation } from 'react-i18next'; // Translate module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Use for add icons
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Use for import different brands icons
import { faBars } from '@fortawesome/free-solid-svg-icons'

/**
 * This function is use for create a Navigation bar
 * It content :
 *  - logo
 *  - list of navigation items
 *  - social logo
 */
const Navbar = () => {
    const { t } = useTranslation();
    return(
        <div className='relative w-full border-b border-gray-400 p-8'>
            <div className='flex flex-row justify-between items-center pl-6'>
                {/* Logo */}
                <img className='w-20 xl:w-40' src={process.env.PUBLIC_URL + '/images/Logos/logo_sm.png'} alt='logo' />

                {/* navigation items */}
                <div className='hidden sm:flex flex-col w-3/6 lg:w-2/5'>
                    <ul className='flex justify-between text-sm xl:text-lg'>
                        <li>{t('navbar.home')}</li>
                        <li>{t('navbar.recipes')}</li>
                        <li>{t('navbar.blog')}</li>
                        <li>{t('navbar.contact')}</li>
                        <li>{t('navbar.aboutUs')}</li>
                    </ul>
                </div>

                {/* Social items */}
                <div className='hidden sm:flex flex-col'>
                    <ul className='flex'>
                        <li><FontAwesomeIcon className='text-xl mx-3' icon={faFacebookF} /></li>
                        <li><FontAwesomeIcon className='text-xl mx-3' icon={faTwitter} /></li>
                        <li><FontAwesomeIcon className='text-xl mx-3' icon={faInstagram} /></li>
                    </ul>
                </div>

                {/* Menu items */}
                <div className='flex flex-col sm:hidden'>
                    <ul className='flex'>
                        <li><FontAwesomeIcon className='text-xl mx-3' icon={faBars} /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;