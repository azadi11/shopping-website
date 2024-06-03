import React from 'react'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { Route, Routes } from 'react-router-dom'
import CheckoutPage from '../pages/CheckoutPage'

function RoutesMap() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/checkout' element={<CheckoutPage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/peyment' element={<HomePage/>}/>
    </Routes>
  )
}

export default RoutesMap