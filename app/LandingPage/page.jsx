import React from 'react'
import Navbar from '../Components/Navbar'
import ProductList from '../Components/ProductList'
import PaginationSlider from '../Components/Paligation'
import Footer from '../Components/Footer'
const LandingPage = () => {
  return (
   <>

   <Navbar/>
   <PaginationSlider/>
   <ProductList/>
   <Footer/>
   </>
  )
}

export default LandingPage