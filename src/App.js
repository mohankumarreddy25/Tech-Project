import { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import TopProducts from './Components/TopProduct';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import productsData from './Assets/productsData';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import OurAdvantages from './Components/OurAdvantages';
import ScrollingCarousel from './Components/ScrollingCarousel';
import Specification from './Components/Specification';


function App() {

  const [product, setProduct] = useState(null)
  const [number, setnumber] = useState(0)
  // filtered data
  const [Data, setData] = useState(productsData)
  const [loadedpredata, setloadedpredata] = useState(false)
  const [cartData, setcartData] = useState([])
  const getProductData = (Data) => {
    setProduct(Data)
  }
  const menuitems = [...new Set(productsData.map(item => item.category))]

  const getCartData = (product) => {
    const totalPrice = 0;

    const existingProduct = cartData.find(item => item.id === product.id);
    if (existingProduct) {
      setcartData(cartData.map(item => item.id === product.id ?
        { ...item, quantity: item.quantity + 1 } : product
      ));
      alert('Already added product to cart')

    }
    else {
      setcartData([...cartData, { ...product, quantity: 1 }]


      );
      alert('added product to cart')

      setnumber(number + 1)

    }
  }


  const increment = (product) => {

    setcartData(cartData.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ));

  }

  const decrement = (product) => {
    const quantity = product.quantity - 1

    if (quantity == 0) {
      cartData.findIndex((item, index) => {
        if (item.id === product.id) {
          cartData.splice(index, 1)
        }
      })
    }
    setcartData(cartData.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    ));
    setnumber(0)
  }

  const deleteHandler = (product) => {
    const updatedcart = cartData.filter(item => item.id !== product.id);
    setcartData(updatedcart)
    setnumber(number - 1)
    alert('product removed from cart')
  }
  const filterData = (val) => {
    const newItems = productsData.filter(item => item.category === val)
    setData(newItems)
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar number={number} getProductData={getProductData}/>
        <Routes>
          <Route path='/' element={<TopProducts getProductData={getProductData} Data={Data} getCartData={getCartData} menuitems={menuitems} setData={setData} filterData={filterData} />} />

          <Route path='/ProductDetails' element={<ProductDetails product={product} getCartData={getCartData} getProductData={getProductData} />} />

          <Route path='/Login' element={<Login />} />
          
          <Route path='/Cart' element={<Cart cartData={cartData} increment={increment} decrement={decrement} deleteHandler={deleteHandler} />} />

          <Route path='/ScrollingCarousel' element={<ScrollingCarousel getProductData={getProductData} Data={Data} getCartData={getCartData} menuitems={menuitems} setData={setData} filterData={filterData} />} />

          <Route path='/Specification' element={<Specification getProductData={getProductData} Data={Data} getCartData={getCartData} menuitems={menuitems} setData={setData} filterData={filterData}/>} />
   
        </Routes>
        <OurAdvantages />
        <Footer />
      </BrowserRouter>

    </div>


  );
}

export default App;