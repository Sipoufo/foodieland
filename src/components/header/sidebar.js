import React from "react";
import { useTranslation } from 'react-i18next'; // Translate module
import { NavLink } from 'react-router-dom'; // Use for redirection with the router 

const Sidebar = ({showNavbar, setShowNavbar}) => {
    const { t } = useTranslation();

    const ClickForHiddenNavbar= (e) => {
        e.preventDefault();
        setShowNavbar(false);
    }

    return(
        // absolute flex
        <div className={`${showNavbar? 'flex' : 'hidden'} z-20 absolute  w-screen h-screen overflow-hidden`}>
            <div className="w-screen h-screen bg-gray-600 bg-opacity-60" onClick={ClickForHiddenNavbar}></div>
            <div className="absolute flex flex-col w-60 h-full bg-white p-6">
                {/* Logo */}
                <img className='w-10/12 h-12 object-contain' src={process.env.PUBLIC_URL + '/images/Logos/logo_sm.png'} alt='logo' />
                <div className="flex w-full mt-10">
                    <ul className='flex flex-col justify-between text-base gap-4'>
                        <NavLink to='/'>{t('navbar.home')}</NavLink>
                        <NavLink to='/'>{t('navbar.recipes')}</NavLink>
                        <NavLink to='/blog-article'>{t('navbar.blog')}</NavLink>
                        <NavLink to='/contact'>{t('navbar.contact')}</NavLink>
                        <NavLink to='/'>{t('navbar.aboutUs')}</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;