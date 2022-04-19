import React from 'react';
import './AboutMe.css';
import myimage from '../../images/eliyas.jpg';

const AboutMe = () => {
    return (
        <div className='about-me'>
            <div className='aboutme-img mb-3'>
            <img className='' src={myimage} alt="" />
            </div>
            <h2>Md. Eliyas</h2>
            <div className='m-5'> 
            <p> My name is Md. Eliyas . I am from Bangladesh. I love programming.  I really want to learn, improve my skills, and all the things like that.  In future I want to be a full stack web-developer. I spend my days developing an awesome product. I already create some project with react.js. Now i am learning from Programming Hero - 'Complete Web Development Course With Jhankar Mahbub ' Web Course . In next 1-2 years, I want to be a full stack web-developer.</p>
            </div>
        </div>
    );
};

export default AboutMe;