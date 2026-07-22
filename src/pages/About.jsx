import React from 'react'
import Header from '../components/layout/Header'
import Hero from '../components/home/HeroBanner'
import AboutHistory from '../components/about/AboutHistory'
import MissionVision from '../components/about/MissionVision'
import GroupCompanies from '../components/about/GroupCompanies'
import ProductionFacility from '../components/about/ProductionFacility'
import Footer from '../components/layout/Footer'

function About() {
  return (
    <main id="main-layout--about">
        <Header />
        <Hero />
        <MissionVision />
        <AboutHistory />
        <GroupCompanies />
        <ProductionFacility />
        <Footer />
    </main>
  )
}

export default About