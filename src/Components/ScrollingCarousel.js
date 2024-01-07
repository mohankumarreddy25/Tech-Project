// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import productsData from '../Assets/productsData'

// const ScrollingCarousel = ({getProductData}) => {
//     const navigate=useNavigate()
//     const SendProductDetails = (item) => {
//       getProductData(item)
//       navigate('/ProductDetails')
//     }
//     return(
//         <div>
//         <div className='mt-4 p-3' style={{backgroundColor:'#212529'}}>
//         <marquee className='text-white '  behavior="alternate" direction="left" onmouseover="this.stop();" onmouseleave="this.start();">
//           {
//             productsData.map((item)=>(
//               <span>
//               <img  onClick={()=>SendProductDetails(item)}  className='img-fluid grow mx-5 ' src={item.heroImage} alt="" style={{width:'100px',height:'100px'}}/>
//               <span> <span className='mx-1'>&#8377;</span>{item.finalPrice}</span>
//               </span>
//             ))
//           }
//         </marquee>
//         </div>
//     </div>
//   )
// }

// export default ScrollingCarousel


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
