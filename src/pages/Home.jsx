import React from 'react'
import Header from '../components/layout/Header'
import HeroBanner from '../components/home/HeroBanner'
import StatsData from '../components/home/StatsData'
import ProductRange from '../components/home/ProductRange'
import FeaturedIndustries from '../components/home/FeaturedIndustries'
import AboutQuality from '../components/home/AboutQuality'
import Sustainability from '../components/home/Sustainability'
import Testimonials from '../components/home/Testimonial'
import Footer from '../components/layout/Footer'

import heroBanner from '../assets/medias/heroBanner1.png'

function Home() {
  return (
    <main id="main-layout--homepage">
        <Header transparentAtTop="yes" />
        <HeroBanner imageSrc={heroBanner} />
        <StatsData />
        <ProductRange />
        <FeaturedIndustries />
        <AboutQuality />
        <Sustainability />
        <Testimonials />
        <Footer />
    </main>
  )
}

export default Home