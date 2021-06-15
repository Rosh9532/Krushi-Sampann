import React, { useState } from 'react'
import Carousel from '../../components/UI/Carousels/Carousel'
import Layout from '../../components/Layout'
import Proddis from '../../containers/Proddis';
import { useSelector } from "react-redux";
import Menu from '../Menu/menu'
/**
* @author
* @function Home

**/

const loggedInHome = () => {
  return(
  <>
    <Layout />
    <Menu />
  </>
  )
}
const nonloggedInHome = () => {
  return(
  <>
     {/* for non logged in users */}
     <Layout />
      <Carousel /> <br /><br />
      <Proddis />
  </>
  )
}
const Home = (props) => {
  const auth = useSelector(state => state.auth);
 
  return (
    auth.authenticate?loggedInHome():nonloggedInHome() 
  )

}

export default Home
