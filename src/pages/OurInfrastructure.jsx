import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroBanner from '../components/home/HeroBanner'
import Facilities from '../components/infrastructure/Facilities'
import Capacity from '../components/infrastructure/Capacity'



function OurInfrastructure() {
  return (
    <main id="main-layout--ourInfrastructure">
        <Header />
        <HeroBanner />
        <Facilities />
        <Capacity />
        <Footer />
    </main>
  )
}

export default OurInfrastructure