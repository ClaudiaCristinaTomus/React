import React from 'react'
import Header from './Header'

import About from '../pages/About'
import Projects from '../pages/Projects'
import Footer from '../pages/Footer'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <About/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default Layout