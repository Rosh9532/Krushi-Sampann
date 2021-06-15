import React from 'react'
import Header from '../Header/Navbar'
import './style.css';
/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  )

}

export default Layout