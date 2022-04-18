import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init';
import { async } from '@firebase/util';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, UpdatError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }


    const handleRegister =async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName : name});
        alert('Updated profile');
        navigate('/home');
            
    }
    return (
        <div className='register-form mt-4'>
        <h2 className='text-center text-primary m-3'>Please Register</h2>
        <form onSubmit={handleRegister} >
            <input type="text" name="name" id="" placeholder='Your Name'/>
            
            <input type="email" name="email" id="" placeholder='Email Address' required/>
            
            <input type="password" name="password" id="" placeholder='Password' required/>
            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
            <label  className={`ps-2 ${agree ? '' : 'text-danger'}`}  htmlFor="terms">Accept Genius Car Terms and Conditions</label>
            <input disabled={!agree} className='btn-primary mt-3' type="submit" value="Register" />
        </form>
        <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
    </div>
    );
};

export default Register;