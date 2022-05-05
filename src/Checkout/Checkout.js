
import React, { useState } from 'react';
import { Button, Card, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import './Checkout.css'
import auth from '../firebase.init';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
const Checkout = () => {

    const [email, setEmail] = useState('');
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (sending) {
        return <p>Sending...</p>;
    }


  const handleOrder = () => {
    toast.success("Thank you!! Im going to contact with you within 24 hours.");
  };

  return (<div>
<div className='container text-center '>
            <h1>This is checkout page</h1>
            
</div>


<div className="custom-size mx-auto my-5">
      <Card>
        <Card.Header className="bg-primary text-white fw-bold">
          Congratulations! I recieved your Photo requirements. Please Give me your Contact Information
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMobileNumber">
              <Form.Control
                type="text"
                placeholder="Enter your mobile number"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Control
                type="text"
                placeholder="Enter your address"
                required
              />
            </Form.Group>
            <ToastContainer />
            <button className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    alert('Email sent');
                }}
            >
                It is better to verify your email before submit.
            </button> <br/>
            <Button
              variant="primary"
              type="button"
              className="w-25 fw-bold mt-1"
              onClick={handleOrder}
            >
              Checkout & Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
</div></div>
  );
};

export default Checkout;
