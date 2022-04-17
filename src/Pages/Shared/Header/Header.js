import React from 'react';
import CustomLink from '../../CustomeLink/CustomeLink';

const Header = () => {
    return (
        <div>
           <CustomLink to="/">HOME</CustomLink>
           <CustomLink to="/">HOME</CustomLink>
           <CustomLink to="/blogs">Blogs</CustomLink>
        </div>
    );
};

export default Header;