import React from 'react'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { Route, Routes } from 'react-router-dom'

function RoutesMap({manageTotalQty}) {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/products'
       element={<ProductsPage manageTotalQty={manageTotalQty}/>}/>
    </Routes>
  )
}

export default RoutesMap