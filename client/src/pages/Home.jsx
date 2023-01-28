
import React from 'react'
import Announcement from '../compontents/Announcement'

import Footer from '../compontents/Footer'
import Navbar from '../compontents/Navbar'
import Newsletter from '../compontents/Newsletter'
import Products from '../compontents/Products'
import Slider from '../compontents/Slider'
import Categories from '../compontents/Categories'
const Home = () => {
  return (
    <div>
      <Announcement></Announcement>
        <Navbar></Navbar>
        <Slider></Slider>
        <Categories></Categories>
        <Products></Products>
        <Newsletter></Newsletter>
       <Footer></Footer>
    </div>
  )
}

export default Home