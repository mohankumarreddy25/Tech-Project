import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import productsData from '../Assets/productsData';

const ProductCarousel = () => {
    console.log( 'image and price ',productsData);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div>
        
        <Slider {...settings}>
          <div>
          <div class="container-fluid">
         {
            productsData.map((item)=>(
                <div  className=''style={{display: "inline-flex"}}>
                    <img src={item.heroImage} alt=""/>
                    <p>{item.finalPrice}</p>
                </div>
            )) 
         }
          </div>
          
          </div>
         
        </Slider>
      </div>
    )
}

export default ProductCarousel