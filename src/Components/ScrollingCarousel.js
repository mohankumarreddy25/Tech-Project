import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import productsData from '../Assets/productsData';

const ScrollingCarousel = ({ getProductData }) => {
  const navigate = useNavigate();
  const marqueeRef = useRef(null);

  const SendProductDetails = (item) => {
    getProductData(item);
    navigate('/ProductDetails');
  };

  const stopMarquee = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const startMarquee = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

  return (
    <div>
      <div className='mt-4 p-3' style={{ backgroundColor: '#212529' }}>
        <marquee
          className='text-white '
          behavior="alternate"
          direction="left"
          ref={marqueeRef}
          onMouseOver={stopMarquee}
          onMouseLeave={startMarquee}
        >
          {productsData.map((item, index) => (
            <div key={index} style={{ display: 'inline-block', margin: '0 10px' }}>
              <img onClick={() => SendProductDetails(item)} className='img-fluid grow mx-5' src={item.heroImage} alt="" style={{ width: '100px', height: '100px' }} />
              <div>
                <span style={{ color: 'white' , marginLeft:'70px',marginBottom:'10px'}}>
                  <span>&#8377;</span>{item.finalPrice}
                </span>
              </div>
            </div>
          ))}
        </marquee>
      </div>
    </div>
  );
};

export default ScrollingCarousel;
