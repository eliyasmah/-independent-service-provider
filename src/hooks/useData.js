import { useEffect, useState } from 'react';

const useData = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setUserData(data))
    }, []);
    return [userData, setUserData];
};

export default useData;