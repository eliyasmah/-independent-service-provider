import React from 'react';
import CustomLink from '../../CustomeLink/CustomeLink';

const Header = () => {
    return (
        <div className='text-xl flex gap-4 justify-center text-center bg-slate-300 py-5'>
           <CustomLink to="/">HOME</CustomLink>
           <CustomLink to="/">HOME</CustomLink>
           <CustomLink to="/blogs">BLOGS</CustomLink>
        </div>
    );
};

export default Header;