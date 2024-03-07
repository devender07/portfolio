import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
const App = () => {


  return (
    <>
    <Navbar/>
    <hr/>
    <Home/>
    <hr/>
    <About/>
    <hr/>
    <Skills/>
    <hr/>
    <Projects/>
    <hr/>
    <Contact/>
    </>
  )
}

export default App