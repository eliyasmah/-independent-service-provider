import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomeLink/CustomeLink';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            <div className='d-flex justify-content-center p-3 fs-4 text-decoration-none bg-dark gap-4'>
           <CustomLink to="/home">Home</CustomLink>
           <CustomLink to="/blogs">Blogs</CustomLink>
           <CustomLink to="/about-me">About Me</CustomLink>
           {
                user ?
                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
            :
               <CustomLink to="/login">Login</CustomLink>
           }
        </div>
        </div>
    );
};

export default Header;