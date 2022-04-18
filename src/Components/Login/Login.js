import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if(user){
        navigate(from, { replace: true });
      }

      if (error) {
        alert(error);
    }

    const handleSubmit = event => {
      event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async() =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
          alert('Sent email');
    }
    return (
        <div className='container w-50 mx-auto'>
        <h2 className='text-primary text-center mt-4'>Please Login</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            <Button className="primary w-100 d-block py-2 mb-3" type="submit">
               Login
            </Button>
        </Form>
        {errorElement}
        <p>New Member? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
        <p><Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={resetPassword}>Forget Password? </Link> </p>
        <SocialLogin></SocialLogin>
    </div>
    );
};

export default Login;