import React from 'react';
import { Card, CardGroup,} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Services = (props) => {
    const {id, img, service, details, price} = props.data;

    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate('/checkout');
    }
    return (

<div>
 <div className='card'>
 <CardGroup>
    <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
        <Card.Title>{service}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Card.Text>
            {details}
        </Card.Text>
        </Card.Body>
        <button onClick={() => navigateToServiceDetail(id)} className='btn-primary w-100 py-2 rounded '>Book Now</button>
    </Card>
    </CardGroup>
 </div>
</div>
    );
};

export default Services;