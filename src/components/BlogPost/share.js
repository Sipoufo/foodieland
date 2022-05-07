// module
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Use for add icons
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Use for import different brands icons

const Share = () => {
    return(
        <div className="w-full flex flex-col  items-center">
            <label className="text-sm">SHARE THIS ONE : </label>
            <ul className='flex flex-col gap-4 mt-4 justify-center items-center'>
                <li><FontAwesomeIcon className='text-sm mx-3' icon={faFacebookF} /></li>
                <li><FontAwesomeIcon className='text-sm mx-3' icon={faTwitter} /></li>
                <li><FontAwesomeIcon className='text-sm mx-3' icon={faInstagram} /></li>
            </ul>
        </div>
    );
};

export default Share;