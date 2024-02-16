import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import reviewsData from '../Assets/reviewsData';
import productsData from '../Assets/productsData';

const ProductDetails = ({ product,getProductData,getCartData }) => {
    console.log(product);
    const navigate = useNavigate();
    const [image, setimage] = useState(product.images[0])
    const [realeted, setrealeted] = useState([])
    console.log(realeted);

  const SendProductDetails = (item) => {
    getProductData(item)

    navigate('/ProductDetails')
  }

  const addHandler=(item)=>{
    getCartData(item)
  }
    const closeHandler = () => {
        navigate('/')
    }
    return (
        <div className='p-4 mt-5' style={{ backgroundColor: '#212529' }}>
            <div className='container p-4' style={{ backgroundColor: '#151315', border: '1px solid white' }}>
                <div className="row">
                    <div className="col-md-1">
                        <div>
                            {
                                product.images.map((image) => {
                                    return (
                                        <div>
                                            <img onClick={() => setimage(image)} onMouseOver={() => setimage(image)} className='img-fluid mt-4 ' src={image} alt="" style={{ border: '1px solid white', backgroundColor: '#212529' }} />
                                        </div>
                                    )
                                })
                            }

                        </div>
                     </div>

                    <div className="col-md-6 justify-content-left">
                        <img className='img-fluid w-75 bg-dark' src={image} alt="" style={{ border: '1px solid white' }} />

                    </div>
                    <div className="col-md-4">


                        <div className="card " style={{ backgroundColor: '#212529' }} >
                            <button onClick={closeHandler} className='btn btn-danger w-25' style={{ marginLeft: "260px" }}>close</button>
                            <div className="card-body">

                                <h2 className='text-white'>{product.title}</h2>
                                <p className='text-white'>{product.info}</p>

                                <div className='d-flex align-items-center justify-content-left'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>

                                    <p className='text-white'>{product.ratings} <span className='text-white'>Ratings</span></p>
                                </div>
                                <hr className='text-white' />
                                <div className='d-flex'>
                                    <h6 className="card-title mx-3 text-white">
                                        <span>&#8377;</span>{product.finalPrice}</h6>
                                    <s><p className="card-text text-white" style={{ fontSize: '10px' }}><span>&#8377;</span>{product.originalPrice}</p></s>
                                </div>
                                <div className='d-flex justify-content-between ' >
                                    <p style={{ fontSize: '16px', color: 'green' }}>you save<span>&#8377;</span>(209) </p>
                                    <button className='btn btn-success'>InStack</button>
                                </div>
                                <hr className='text-white' />
                                <p className='text-white'>Offers and Discounts</p>
                                <div className='d-flex'>
                                    <button className='mx-2' style={{ fontSize: '10px' }}>No Cost Emi On Credit Card</button>
                                    <button className='' style={{ fontSize: '10px' }}>Pay Later and Avail Casback</button>
                                </div>
                                <hr className='text-white' />

                                <a href="#" className="btn btn-danger">AddToCart</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
            </div>
            {/* specification overview revies starts here  */}
            <div className="container-fluid  text-white mt-5">
            <button className='btn btn-danger  ' style={{marginLeft:'45%'}}>Specification</button>

                <div className="row align-items-start text-left">
                    <div className="col" style={{border:'1px solid white'}}>
                        <div className="row mt-5" >
                            <div className="col-6 ">
                                <p className='mx-5'>Brand</p>
                                <p className='mx-5'>Modal</p>
                                <p className='mx-5'>Generic Name</p>
                                <p className='mx-5'>HeadPhone Type</p>
                                <p className='mx-5'>Conectivity</p>
                                <p className='mx-5'>MicroPhone</p>
                            </div>
                            <div className="col-6">
                                <p className='text-white'>{product.brand}</p>
                                <p className='text-white'>{product.title}</p>
                                <p className='text-white'>{product.category}</p>
                                <p className='text-white'>{product.type}</p>
                                <p className='text-white'>{product.connectivity}</p>
                                <p className='text-white'>yes</p>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
           <div className='mt-5' style={{border:'1px solid white'}}>
           <h4 className=' btn btn-danger text-center' style={{marginLeft:'45%'}}>Reviews</h4>
            {
                reviewsData.map((item)=>(
                    <div className='text-white mx-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
                        <p>{item.name}</p>
                        <p>{item.date}</p>
                        <p>{item.review}</p>
                        <p>{item.rateCount}</p>
                      <hr className='text-white'/>
                    </div>
                ))
            }
           </div>
           <div className='container-fluid'>
           <div class="row">
           {
            productsData.filter(item=>item.category===product.category).map((item, index) => (

              <div className="col-md-3 mb-4  ">
                <div key={index} className="card  " style={{ border: "0.1px solid rgb(114, 112, 112)", backgroundColor: ' #141414' }}>
                  <img className='img-fluid  mx-auto my-auto '  onClick={()=>SendProductDetails(item)} src={item.heroImage} alt="..." style={{
                    width: '150px', height: '150px', backgroundColor: "#161819"
                  }} />
                  <div className="card-body">
                    <h5 className='text-white'>{item.title}</h5>
                    <p className='text-white '    > {item.info.substring(0,20)}...</p>

                    <hr className='text-white'/>

                    <h4 className='text-white'><span>&#8377;</span>{item.finalPrice} <s className='mx-2 ' style={{ fontSize: '13px', color: 'rgb(170, 165, 165)' }}> <span>&#8377;</span>{item.originalPrice}</s> </h4>
                    <button onClick={()=>addHandler(item)} className='btn btn-danger w-100'>AddtoCart</button>
                  </div>
                </div>
              </div>
            )
            ) 
          }
           </div>        
           </div>
           </div>
    )
}

export default ProductDetails


