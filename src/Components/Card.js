
import React from 'react'
import productData from '../Assets/productsData'

const Card = ({addtocart}) => {
    console.log(productData);
  return (
    <div>
        
    <div className='row ' style={{marginTop:'70px'}}>
        {
         productData.map((item)=>(
            <div className='col-md-3'>
                <div className="card" >
  <img src={item.heroImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p>{item.info}</p>
     <button onClick={()=>addtocart(item)}>AddToCart</button>
  </div>
</div>

                </div>
         ))   
        }

    </div>



    </div>
  )
}

export default Card