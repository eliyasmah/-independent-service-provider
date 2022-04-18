import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className='about-me'>
            <div className='aboutme-img mb-3'>
            <img className='' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1650311659~exp=1650312259~hmac=2095df7ff2eeca30da94c37fada6975352beea907a46afd4dbedbfc1839ec0d1&w=740" alt="" />
            </div>
            <h2>Md. Eliyas</h2>
            <div className='m-5'> 
            <p> My name is Md. Eliyas . I am from Bangladesh. I love programming. In future I want to be a full stack web-developer. I already create some project with react.js. Now i am learning from Programming Hero - 'Complete Web Development Course With Jhankar Mahbub ' Web Course . In next 1-2 years, I want to be a full stack web-developer.</p>
            </div>
        </div>
    );
};

export default AboutMe;