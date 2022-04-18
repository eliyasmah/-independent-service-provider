import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='m-5'>
                <div className='bg-primary p-3 rounded mb-3 shadow-lg'>
                    <h3 className='text-xl mb-2 font-bold'>1. Difference between authorization and authentication.</h3>
                    <p className='text-white'><span className='text-black'>Answer:</span> Authentication is a process of verifying who someone is,whereas authorization is a process of verifying what specific applications, files, and data a user has access to.
                    Authentication work through passwords, one-time pins, biometric information, and other information provided or entered by the user, Authorization work through settings that are implemented and maintained by the organization.
                    Authentication is the first step of good identity and access management process, Authorization always take place after authentication.
                    Authentication visible to and partially changeable by the user, Authorization isn’t visible to or changeable by the user.
                    </p>
                </div>
                <div className='bg-primary p-3 rounded mb-3 shadow-lg'>
                    <h3 className=''>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p className='text-white'><span className='text-black'>Answer:</span> The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Other option for Authentication Password-based authentication. Passwords are the most common methods of authentication. Certificate-based authentication. Biometric authentication. Token-based authentication.</p>
                </div>
                <div className='bg-primary p-3 rounded mb-2 shadow-lg'>
                    <h3 className=''>3. What other services does firebase provide other than authentication ?</h3>
                    <p className='text-white'><span className='text-black'>Answer:</span> 
                        <ol>
                            <li>Cloud Messaging</li>
                            <li>Realtime Database.</li>
                            <li>Cloud Storage.</li>
                            <li> Google Analytics.</li>
                        </ol>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;