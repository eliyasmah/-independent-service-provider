
import React from 'react';
import useData from '../../hooks/useData';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    const [userData, setUserData] = useData();
    return (
        <div className='banner'>
            <div className='d-md-flex flex-row justify-content-evenly p-5'>
                <div>
                <h1 className='text-primary text-center m-5 '>Single Flash Photography</h1>
                </div>
                <div className='text-center '>
                    <img className='rounded' src="https://img.freepik.com/free-photo/photography-man_101299-4.jpg?w=740" alt="" />
                </div>
            </div>
            <div>
               <h2 className='mt-5 text-center text-primary'>Services</h2>
               <hr className='bar' />
               <div className='row row-cols-1 row-cols-md-3 g-4 m-4'>
                    {
                        userData.map(data => <Services
                            key={data._id}
                            data={data}
                        ></Services>)
                    }
                </div>
            </div>
            <div>
                <h2 className='text-primary text-center mt-5'>Client Reviews</h2>
                <hr className='bar' />
                <div>
                    <div className='row row-cols-1 row-cols-md-3 g-4 m-4'>
                        <div className='col'>
                            <div className='card h-100'>
                            <img className='card-img-top' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1650317917~exp=1650318517~hmac=4868dd66d4535157e1aef3c7ec77689544fbdb61b4ba16657b328cedc1bed943&w=740" alt="" />
                                <div className='card-body bg-primary text-white'>
                                    <h4 className='card-title text-center'>Faridul Hasan</h4>
                                    <p>"Alex was amazing start to finish! We needed a photographer last minute for a couples wedding shower at Lakeside Country Club in Houston - he was so easy to communicate"</p>
                                    <p className='bg-danger py-2 text-center rounded mt-5 mb-0 fs-5'>Ratting: 4</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card h-100'>
                            <img className='card-img-top' src="https://img.freepik.com/free-photo/red-haired-serious-young-man-blogger-looks-confidently_273609-16730.jpg?w=740&t=st=1650320814~exp=1650321414~hmac=4123087d2455b6d83b59ef3a5f71df6d21c585bc578293684ddb15219572aa4a" alt="" />
                                <div className='card-body bg-primary text-white'>
                                    <h4 className='card-title text-center'>Faridul Hasan</h4>
                                    <p>"A true pro, Alex Greer is the best event photographer in Houston. Weddings and event photography tends to all blend in to look the same, but Alex's photos are perspective of our wedding."</p>
                                    <p className='bg-danger py-2 text-center rounded mt-5 mb-0 fs-5'>Ratting: 4.5</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card h-100'>
                            <img className='card-img-top' src="https://img.freepik.com/free-photo/excited-stylish-curly-haired-girl-sunglasses-pointing-right-showing-way_176420-20193.jpg?t=st=1650320840~exp=1650321440~hmac=d13fe40b084e0dae9ac6d23c964ddb0cfed88cbce8fc9a94a019a3143cff1f0e&w=740" alt="" />
                                <div className='card-body bg-primary text-white'>
                                    <h4 className='card-title text-center'>Faridul Hasan</h4>
                                    <p>"Alex was absolutely incredible to work with. He worked with me on my proposal and took the most incredible pictures. He is a true professional well worth it! Very prompt and ensured we looked great."</p> 
                                    <p className='bg-danger py-2 text-center rounded mt-5 mb-0 fs-5'>Ratting: 5</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;