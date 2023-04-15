import React from 'react'
import Header from './Header'
import classes from './Layout.module.scss'
import About from '../pages/About'
import Projects from '../pages/Projects'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <About/>
    <Projects/>
    </>
  )
}

export default Layout