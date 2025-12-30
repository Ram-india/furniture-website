import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Footer from '../components/common/Footer'
import Testimonials from '../components/sliders/Testimonials'
import Categories from '../components/home/Categories'
import TopBar from '../components/common/TopBar'
import FeaturedBanners from '../components/home/FeaturedBanners'
import FeaturedProducts from '../components/common/FeatureProducts'

const Home = () => {
  return (
    <>
  
    <Hero/>
    <Categories/>
    <FeaturedBanners/>
    <FeaturedProducts/>
    
    </>
  )
}

export default Home