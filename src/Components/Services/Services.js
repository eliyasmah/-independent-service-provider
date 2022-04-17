import React from 'react';

const Services = (props) => {
    const { img, service,details} = props.data;
    return (
        <div className='bg-slate-100 p-5'>
            <img className=' rounded m-auto' src={img} alt=" " />
            <h1 className='text-xl text-center py-3 text-slate-600'>{service}</h1>
            <p>{details}</p>
            <button className='bg-slate-500 py-3 text-center rounded-md text-white'>Book</button>
        </div>
    );
};

export default Services;