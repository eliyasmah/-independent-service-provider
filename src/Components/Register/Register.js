import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    if(user){
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        
    }
    return (
        <div className='register-form mt-4'>
        <h2 style={{textAlign: 'center'}}>Please Register</h2>
        <form onSubmit={handleRegister} >
            <input className='rounded' type="text" name="name" id="" placeholder='Your Name'/>
            
            <input className='rounded' type="email" name="email" id="" placeholder='Email Address' required/>
            
            <input className='rounded' type="password" name="password" id="" placeholder='Password' required/>
            <input className='rounded' type="submit" value="Register" />
        </form>
        <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
    </div>
    );
};

export default Register;