import React from 'react'
import { Route, Routes } from 'react-router'

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/products" element={<Product />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  )
}

export default App