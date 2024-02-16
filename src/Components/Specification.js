import React, { useState } from 'react'
import productsData from '../Assets/productsData'
import { useNavigate } from 'react-router-dom'

const Specification = ({ getProductData, Data, getCartData, menuitems, filterData, setData }) => {
    const navigate = useNavigate()
    const [filterData1, setfilterData1] = useState(productsData)
    const [range, setrange] = useState(499)
    const [search, setsearch] = useState('')
    const [backgroundColor, setbackgroundColor] = useState('')
    const SendProductDetails = (item) => {
        getProductData(item)

        console.log('image', Data);
        navigate('/ProductDetails')
    }

    const addHandler = (item) => {
        getCartData(item)
    }

    const featureproduct = (cat) => {
        const result = productsData.filter((item) => {
            return item.tag === cat
        })
        setfilterData1(result)
    }

    const lowestPrice = (cat) => {
        const result = productsData.filter((item) => {
            return item.finalPrice > 5000 === cat
        })
        setfilterData1(result)
    }

    const jblHandler = (cat) => {
        const result = productsData.filter((item) => {
            return item.brand === cat
        })
        setfilterData1(result)
    }
    const boatHandler = (cat) => {
        const result = productsData.filter((item) => {
            return item.brand === cat
        })
        setfilterData1(result)
    }
    const sonyHandler = (cat) => {
        const result = productsData.filter((item) => {
            return item.brand === cat
        })
        setfilterData1(result)
    }

    const Neckbands = (cat) => {
        const result = productsData.filter((item) => {
            return item.category === cat
        })
        setfilterData1(result)
    }
    const Headphones = (cat) => {
        const result = productsData.filter((item) => {
            return item.category === cat
        })
        setfilterData1(result)
    }
    const Earbuds = (cat) => {
        const result = productsData.filter((item) => {
            return item.category === cat
        })
        setbackgroundColor('red')
        setfilterData1(result)
    }
    const Earphones = (cat) => {
        const result = productsData.filter((item) => {
            return item.category === cat
        })
        setfilterData1(result)
    }
    const toprated=()=>{
     const result=productsData.filter((item)=>{
        return item.rateCount===5
     })
     setfilterData1(result)
    }
    const onChange=(e)=>{
       setsearch(e.target.value)        
      }

      const filteredData =()=>{ productsData.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())

  );
  setfilterData1(filteredData)

      }
    return (
        <div>

            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col- col-md-2 col-lg-2 text-white mx-3" style={{ position: 'fixed', top: '0' }}>
                    <input type="text" value={search}  onChange={onChange}/>
                        <h4>Sort By</h4>
                        <hr className='text-white' />
                        <div style={{ cursor: 'pointer' }}>
                           <ul>
                           
                           <li><p>Latest</p></li>
                           <li> <p onClick={() => featureproduct('featuredproduct')}>Featured Product</p></li>
                           <li> <p onClick={() => lowestPrice('finalPrice')}>Price(lowest First)</p></li>
                           <li> <p>Price(High First)</p></li>
                           <li> <p onClick={()=>toprated()}>Top Rated</p></li>
                           </ul>
                        </div>
                        <h4 className='mt-5'>Filted By</h4>

                        <hr className='text-white' />

                        <h4>Brands</h4>
                        <div className='mx-4' style={{ cursor: 'pointer' }}>
                            <ul>
                                <li> <p onClick={() => jblHandler('JBL')}>Jbl</p></li>
                                <li> <p onClick={() => boatHandler('boAt')}>BoAt</p></li>
                                <li> <p onClick={() => sonyHandler('Sony')}>Sony</p></li>
                            </ul>
                        </div>
                        <hr className='text-white' />

                        <h4>Catogories</h4>
                        <div className='mx-4' style={{ cursor: 'pointer' }}>
                            <ul>
                                <li> <p  onClick={() => Earphones('Earphones')} style={{backgroundColor}}>Earphones</p></li>
                                <li> <p onClick={() => Earbuds('Earbuds')}>Earbuds</p></li>
                                <li> <p onClick={() => Headphones('Headphones')}>Headphones</p></li>
                                <li> <p onClick={() => Neckbands('Neckbands')}>Neckbands</p></li>
                            </ul>
                        </div>

                        <div>
                            <hr className='text-white' />

                            <h4>Price</h4>
                            <input type="range" name="price" max='10000' min='499' step='100' value={range} onChange={(e)=>setrange(e.target.value)} id="" />
                            <h4>{range}</h4>
                        </div>

                    </div>
                    <div className="col-md-9   " style={{marginLeft:'300px'}}>
                        <div class="row">

                            {
                                filterData1.map((item, index) => (

                                    <div className="col-md-4">
                                        <div key={index} className="card  " style={{ border: "0.1px solid rgb(114, 112, 112)", backgroundColor: ' #141414' }}>
                                            <img className='img-fluid  mx-auto my-auto ' onClick={() => SendProductDetails(item)} src={item.heroImage} alt="..." style={{
                                                width: '150px', height: '150px', backgroundColor: "#161819"
                                            }} />


                                            <div className="card-body">
                                                <h5 className='text-white'>{item.title}</h5>
                                                <p className='text-white '    > {item.info.substring(0, 20)}...</p>

                                                <hr className='text-white' />

                                                <h4 className='text-white'><span>&#8377;</span>{item.finalPrice} <s className='mx-2 ' style={{ fontSize: '13px', color: 'rgb(170, 165, 165)' }}> <span>&#8377;</span>{item.originalPrice}</s> </h4>
                                                <button onClick={() => addHandler(item)} className='btn btn-danger w-100'>AddtoCart</button>
                                            </div>
                                        </div>
                                    </div>
                                )

                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specification