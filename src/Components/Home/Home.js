
import React from 'react';
import useData from '../../hooks/useData';
import Services from '../Services/Services';

const Home = () => {
    const [userData, setUserData] = useData();
    return (
        <div>
            <h1 className='text-3xl md:text-7xl text-center pt-3'>wedding ring photos</h1>
            <div className=' flex justify-center md:h-[100vh]  m-10'>
                <img src="https://img.freepik.com/free-photo/wedding-bands-hands-bride-groom-with-beautiful-wedding-bouquet-made-greenery-white-flowers_8353-11212.jpg?t=st=1650208527~exp=1650209127~hmac=621653da57959078b3d409b16a92010e12d21135ec5804b3f353f1d434e31b04&w=740" alt="" />
            </div>
            <div>
               <h2 className='text-3xl text-center'>Services</h2>
               <div className='md:grid grid-cols-3 gap-10 mx-20 mt-16'>
                    {
                        userData.slice(0, 3).map(data => <Services
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