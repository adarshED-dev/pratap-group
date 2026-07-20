import React from 'react'
import Header from '../components/layout/Header'
import Hero from '../components/home/HeroBanner'
import ContactForm from '../components/contact/ContactForm'
import Footer from '../components/layout/Footer'



function Contact() {
  return (
    <main id="main-layout--contact">
        <Header />
        <Hero />
        <ContactForm />
        <Footer />
    </main>
  )
}

export default Contact