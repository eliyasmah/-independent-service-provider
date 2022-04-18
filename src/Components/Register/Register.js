import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className='register-form'>
        <h2 style={{textAlign: 'center'}}>Please Register</h2>
        <form >
            <input type="text" name="name" id="" placeholder='Your Name'/>
            
            <input type="email" name="email" id="" placeholder='Email Address' required/>
            
            <input type="password" name="password" id="" placeholder='Password' required/>
            <input type="submit" value="Register" />
        </form>
        {/* <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p> */}
    </div>
    );
};

export default Register;