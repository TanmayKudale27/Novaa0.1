import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Section from './pages/Section'
import Blog from './pages/Blog'
import Features from './pages/Features'


function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Section/>
      <Features/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App