import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, price, description, image } = props.service;

 

    return (
        <div className='mb-5'>
            <Card className='service-card shadow p-3'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>${price}</Card.Title>
                    <Card.Text className='mb-5'>
                        {description}
                    </Card.Text>
                    <Link to="/checkout" className='checkout-btn bg-primary text-white w-100'>Checkout</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;