import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import productsData from '../Assets/productsData'

const Navbar = ({number,getProductData}) => {
  const navigate=useNavigate();
  const [searchData, setsearchData] = useState([])

  const [inputData, setinputData] = useState('')

  const onchange=(e)=>{
    setinputData(e.target.value)
    setsearchData(productsData)
  }
  const getSearchItemShow=(item)=>{
    getProductData(item)
    navigate('/ProductDetails')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbarColor navbackground fixed-top " >
        <div className="container-fluid" >
          <Link className="navbar-brand text-white mx-5" to="/">Tech-Shop</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0  mx-5 " >

            <form className="d-flex justify-content-center align-items-center " role="search">
          <div className='d-flex bg-gray'>
          <input className=" form-control me-2 borderno" type="search" placeholder="Search your products " aria-label="Search" value={inputData} onChange={onchange} />
        </div>       
      </form>  
              <li className="nav-item" >
              <Link to='/Cart' className="nav-link active text-white" aria-current="page" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0" />
                  </svg>
                  <span className='text-success bg-white  'style={{borderRadius:"10px" ,padding:'1px',fontWeight:'bolder'}}>{number}</span>
                  </Link>
              </li>
              <li className="nav-item">
                <Link to='/Login' className="nav-link text-white" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='bg-white w-25 ' style={{marginTop:'60px',marginLeft:'65%'}}>
      {        
             searchData.filter(item=>{
              if(inputData.length===0){
                return ;
    
              }
              else if(item.title.toLowerCase().includes(inputData.toLowerCase())){
                 return item
              }             
              
            }).slice(0, 5)
            .map((title)=>(
              <div >
              
                <span onClick={()=>getSearchItemShow(title)} className='text-black text-center '>{title.title}</span>
               <br/></div>
             ))
              }
      </div>
    </div>   
  )
}
export default Navbar

