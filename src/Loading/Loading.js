import React from "react";
import { Button, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <section style={{ height: "500px" }}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "300px" }}
      >
       <Spinner animation="grow" variant="primary" />
       <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="danger" />
     

       
        
      </div>
    </section>
  );
};

export default Loading;
