import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero section/Hero'
import CompanysLogo from './components/Company showcase/CompanysLogo'
import Info from './components/Why info/Info'
import About from './components/About/About'
import Banner from './components/Footer-Banner/Banner'
import VideoComponent from './components/Video-Showcase/VideoComponent'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CompanysLogo/>
      <Info/>
      <VideoComponent/>
      <About/>
      <Testimonials/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App