import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';

import Service from '../Service/Service';
import './Home.css'


const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='mb-5 mx-auto w-75 vh-50'>
            <Carousel fade>
  <Carousel.Item  >
    <img
      className="d-block w-100 img-fluid"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Keep The Memories in Your Hand</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100  img-fluid"
      src={slide2}
      alt="Second slide"
    />
    <Carousel.Caption className='text-dark'>
      <h3>Take Your Best <span className='text-warning'>Portrait Shots</span></h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100  img-fluid"
      src={slide3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Even Capture The Smallest Thing of Your Life</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            <h2 className='text-center mb-4 mt-5'>My Services</h2>
            <div className='container service-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
                
            </div>

        </div>
        
    );
};

export default Home;