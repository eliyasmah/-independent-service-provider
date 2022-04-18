import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='m-5'>
                <div className='bg-primary p-5 rounded mb-2 shadow-lg'>
                    <h1 className='text-xl mb-2 font-bold'>1. Difference between authorization and authentication.</h1>
                    <p className='text-white'><span className='text-'>Answer:</span> Authentication is a process of verifying who someone is,whereas authorization is a process of verifying what specific applications, files, and data a user has access to.
                    Authentication work through passwords, one-time pins, biometric information, and other information provided or entered by the user, Authorization work through settings that are implemented and maintained by the organization.
                    Authentication is the first step of good identity and access management process, Authorization always take place after authentication.
                    Authentication visible to and partially changeable by the user, Authorization isn’t visible to or changeable by the user.
                    </p>
                </div>
                <div className='bg-slate-200 p-5 rounded-lg shadow-lg'>
                    <h1 className='text-xl mb-2 font-bold'>2. Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <p><span className='text-xl text-red-600'>Answer:</span> Semantic tags clearly define the purpose of HTML element. Semantic tags also describes the type of content that the element should contain. Semantic tags give more hooks for styling your content. We can do all of these things easily by using semantic tags and smartly applied CSS. Semantic HTML tags that introduce meaning to the web page rather than just presentation. Examples of semantic HTML tags:h1-h6,blockquote,code,p,ul etc.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;