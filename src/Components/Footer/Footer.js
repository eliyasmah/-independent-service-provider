import React from 'react';
import camera from '../../images/camera.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <div className='text-lg bg-black py-3 '>
            <div className='footer'>
                <img src={camera} alt="" />
                <h5>Single Flash Photography</h5>
            </div>
        <h5 className='text-white text-center'>Copyright by &copy; Md. Eliyas</h5>
    </div>
    );
};

export default Footer;