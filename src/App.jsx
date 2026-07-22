import React from 'react'
import { Route, Routes } from 'react-router'

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import OurInfrastructure from './pages/OurInfrastructure'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/products" element={<Product />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/our-infrastructure" element={<OurInfrastructure />} />
    </Routes>
  )
}

export default App