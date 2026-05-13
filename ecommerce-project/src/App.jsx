import axios from 'axios';
import {Routes,Route} from 'react-router';
import {CheckoutPage} from './pages/CheckoutPage.jsx'
import{useState,useEffect} from 'react';

import './App.css'
import HomePage from "./pages/HomePage.jsx"
import {OrdersPage} from './pages/OrdersPage';

import {Tracking} from './pages/Tracking';


function App() {
  const [cart, setCart] = useState([]);
  useEffect(()=>{
  axios.get('/api/cart-items')
            .then((response) => {
                setCart(response.data);
            })
            .catch((error) => {
                console.error('Failed to load cart items:', error);
            });
  },[]);


  return (
    <Routes>
     <Route path="/" element={<HomePage cart={cart}/>} />
     <Route path="/checkout" element={<CheckoutPage cart={cart}/>} />
     <Route path="/orders" element={<OrdersPage/>}/>
     <Route path="/tracking" element={<Tracking/>}/>
    </Routes>


  )
}

export default App
