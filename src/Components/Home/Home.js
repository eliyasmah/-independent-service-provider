
import React from 'react';
import useData from '../../hooks/useData';
import Services from '../Services/Services';

const Home = () => {
    const [userData, setUserData] = useData();
    return (
        <div>
            <h1 className='text-primary text-center mt-5'>wedding ring photos</h1>
            <div className='m-5 text-center'>
                <img src="https://img.freepik.com/free-photo/wedding-bands-hands-bride-groom-with-beautiful-wedding-bouquet-made-greenery-white-flowers_8353-11212.jpg?t=st=1650208527~exp=1650209127~hmac=621653da57959078b3d409b16a92010e12d21135ec5804b3f353f1d434e31b04&w=740" alt="" />
            </div>
            <div>
               <h2 className='mt-5 text-center'>Services</h2>
               <div className='row row-cols-1 row-cols-md-3 g-4 m-4'>
                    {
                        userData.map(data => <Services
                            key={data._id}
                            data={data}
                        ></Services>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;