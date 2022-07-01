import React from 'react'

import Header from './Header'
import NavBar from './NavBar'
import SubNavBar from './SubNavBar'
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <>

    <Header/>

          <NavBar/>

              <SubNavBar/>

        {children}


    <Footer/>

    </>
  )
}

export default Layout