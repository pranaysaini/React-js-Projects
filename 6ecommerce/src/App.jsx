import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Form} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import Products  from './components/Admin/Products'
import Orders from './components/Admin/Orders'
import Customers  from './components/Admin/Customers'
import Payments from './components/Admin/Payments'
import Home from './components/Home'
import MainProducts from './components/MainProducts'
import Category from './components/Category'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Signup from './components/Signup'
import ContactUs from './components/ContactUs'

function App() {
  
  return (
    <>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<MainProducts />}></Route>
                <Route path="/categories" element={<Category />}></Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/admin">
                    <Route path="products" element={<Products />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="payments" element={<Payments />} />
                    <Route path="payments" element={<Payments />} />
                    
                </Route>
                {/* <Route path elements={<NotFound />}></Route> */}
              </Routes>
          </BrowserRouter>
      
      
    </>
  )
}

export default App
