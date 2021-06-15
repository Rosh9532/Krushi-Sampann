import React from 'react'
import Layout from '../../Components/Layout'
import Carousel from '../../Components/UI/Carousel/Carousel'
import Proddis from '../../Container/Proddis'
// import UploadContract from '../Contract/uploadContract'

/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <div>
        <Layout>
         </Layout>
         {/* <UploadContract/> */}
         <br/>
        <Carousel />
        <br/>
        {/* <Proddis/> */}
    </div>
   )

 }

export default Home