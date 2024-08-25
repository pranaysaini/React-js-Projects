import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import Products  from './components/Admin/Products'
import Orders from './components/Admin/Orders'
import Customers  from './components/Admin/Customers'
import Payments from './components/Admin/Payments'

function App() {
  
  return (
    <>
          <BrowserRouter>
              <Routes>
                <Route path="/admin">
                    <Route path="products" element={<Products />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="payments" element={<Payments />} />

                </Route>
                
              </Routes>
          </BrowserRouter>
      
      
    </>
  )
}

export default App
