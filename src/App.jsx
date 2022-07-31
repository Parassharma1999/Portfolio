import React from 'react'
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import About from './Components/About/About'
import Experience from "./Components/Experience/Experience"
import Portfolio from "./Components/Portfolio/Portfolio"
import Testinomial from "./Components/Testimonial/Testimonial"
import Contact from "./Components/Contact/Contact"
import Education from './Components/Education/Education'
const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Education/>
      <Contact/>
       
    </>
  )
}

export default App