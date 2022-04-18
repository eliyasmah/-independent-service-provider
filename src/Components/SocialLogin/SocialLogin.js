import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;

    if(error){
        return (
            <div>
               errorElement = <p className='text-danger'>Error:  {error.message}</p>
            </div>
        )
    }
    if(user){
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                    <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src='https://raw.githubusercontent.com/ProgrammingHero1/genius-car-service-direction-module-62/main/src/images/social/google.png' alt="" />
                        <span className='px-2'>Google Sign In</span>
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;