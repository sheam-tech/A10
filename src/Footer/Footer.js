import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './Footer.css';

//component for footer
const Footer = () => {
    return (
        <footer className="bg-light text-dark p-3">
            <div className="container">
                <Row>
                    <Col  xs={12} sm={12} md={4} lg={6}>
                        <p> <img style={{ width: '100px' }} src={logo} alt="logoImage" className='mx-auto' /></p>
                        <p className="text-justify ms-3">I care every preferences of my customers. I make them smile with there memories printing in papers(Photos).</p>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={3} className="text-center">
                        <h3 className="text-primary fw-bold">Hire Me To:</h3>
                        <p>
                            <span>Dhaka</span>
                            <br />
                            <span>Sylhet</span>
                            <br />
                            <span>Chittagong</span>
                            <br />
                            <span>Rajshahi</span>
                            <br />
                            <span>Khulna</span>
                            <br />
                            <span>Rangpur</span>
                        </p>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={3} className="text-center">
                        <h3 className="text-primary fw-bold">My Services</h3>
                        <p>
                            <span>Portrait Photography</span>
                            <br />
                            <span>Photojournalism</span>
                            <br />
                            <span>Fashion Photography</span>
                            <br />
                            <span>Sports Photography</span>
                            <br />
                            <span>Still Life Photography</span>
                            <br />
                            <span>Wild-life Photography</span>
                            <br />
                            <span>Editorial Photography</span>
                            <br />
                            <span>Wedding Photography</span>
                            <br />
                            <span>Architectural Photography</span>
                        </p>
                    </Col>
                </Row>
            </div>
            <p className="mt-5 text-center">
                <Link to={{ pathname: "https://www.facebook.com/" }} target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-facebook text-danger me-3" data-toggle="tooltip" title="Facebook"></i></Link>
                <Link to={{ pathname: "https://www.twitter.com/" }} target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-twitter text-danger me-3" data-toggle="tooltip" title="Twitter"></i></Link>
                <Link to={{ pathname: "https://www.linkedin.com/" }} target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-linkedin text-danger me-3" data-toggle="tooltip" title="Linkedin"></i></Link>
                <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank" rel="noreferrer"><i aria-hidden="true" className="fab fa-instagram text-danger me-3" data-toggle="tooltip" title="Github"></i></Link>
                <Link to={{ pathname: "https://www.youtube.com/" }} target="_blank" rel="noreferrer"><i aria-hidden="true" className="fab fa-youtube text-danger me-3" data-toggle="tooltip" title="Github"></i></Link>
            </p>
            <p className="text-secondary text-center fs-6"><small>Copyright &copy; 2022 Sheam's Photography. All rights reserved.</small></p>
        </footer>
    );
};

export default Footer;