import React from 'react';
import { Carousel } from 'react-bootstrap';
function carousel() {  
  return (
    <Carousel className='bg-dark' controls={false} indicators={false} interval={3000}>
      <Carousel.Item interval={3000}>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col text-white text-align-start ">
              <h4>JBl Live 660NC</h4>
              <h1>Keep The Noise Out,</h1>
              <h1>Or in. You Choose</h1>
              <h1 className="mt-4">₹9,999 <s style={{fontSize:'1.5rem'}}>₹14,999</s></h1>
              <button
                className="text-white mt-5"
                style={{
                  backgroundColor: "red",
                  border: "none",
                  padding: "8px 20px",
                }}> 
                 Shop Now
              </button>
            </div>
            <div className="col">
              <img className="d-block w-100" src={require("../Assets/images/products/jbl660nc-1.png")} alt="First slide" />
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col text-white text-align-start">
              <h4>boAt Airdopes 131</h4>
              <h1>Featherweight For</h1>
              <h1>Comfort All-Day.</h1>
              <h1 className="mt-4">₹1,099 <s style={{fontSize:'1.5rem'}}>₹2,990</s></h1>
              <button
                className="text-white mt-5"
                style={{
                  backgroundColor: "red",
                  border: "none",
                  padding: "8px 20px",
                }} >
                Shop Now
              </button>
            </div>
            <div className="col">
              <img className="d-block w-100" src={require("../Assets/images/products/boat131-3.png")} alt="Second slide" />
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col text-white text-align-start">
              <h4>boAt WH-XB910N</h4>
              <h1>Give Your Favourite</h1>
              <h1>Music A Boost.</h1>
              <h1 className="mt-4">₹13,489 <s style={{fontSize:'1.5rem'}}>₹19,990</s></h1>
              <button
                className="text-white mt-5"
                style={{
                  backgroundColor: "red",
                  border: "none",
                  padding: "8px 20px",
                }}
              >
                Shop Now
              </button>
            </div>
            <div className="col">
              <img className="d-block w-100" src={require("../Assets/images/products/boat410-2.png")} alt="Third slide" />
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default carousel;