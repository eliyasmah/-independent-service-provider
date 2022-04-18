import React from 'react';
import CustomLink from '../CustomeLink/CustomeLink';

const Header = () => {
    return (
        <div>
            <div className='d-flex justify-content-center p-3 fs-4 text-decoration-none bg-dark gap-4'>
           <CustomLink to="/home">Home</CustomLink>
           <CustomLink to="/blogs">Blogs</CustomLink>
           <CustomLink to="/about-me">About Me</CustomLink>
           <CustomLink to="/login">Login</CustomLink>
        </div>
        </div>
    );
};

export default Header;