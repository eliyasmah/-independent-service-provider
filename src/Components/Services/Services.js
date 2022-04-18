import React from 'react';
import { Card, CardGroup,} from 'react-bootstrap';

const Services = (props) => {
    const { img, service,details} = props.data;
    return (

<div>
 <div className='card'>
 <CardGroup>
    <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
        <Card.Title>{service}</Card.Title>
        <Card.Text>
            {details}
        </Card.Text>
        </Card.Body>
        <button className='btn-primary w-100 py-2 rounded '>Book</button>
    </Card>
    </CardGroup>
 </div>
</div>
    );
};

export default Services;