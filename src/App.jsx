import React from 'react'
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import About from './Components/About/About'
import Experience from "./Components/Experience/Experience"
import Portfolio from "./Components/Portfolio/Portfolio"
import Testinomial from "./Components/Testimonial/Testimonial"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Services from "./Components/Services/Services"
const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testinomial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App