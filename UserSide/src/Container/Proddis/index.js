import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductBySlug } from '../../actions'
import CategoryHeader from '../../Components/CategoryHeader'
import Header from '../../Components/Header'
import { Link } from "react-router-dom"
import { Navbar, Container } from "react-bootstrap";
import "./style.css"
import { generatePublicUrl } from '../../urlConfig'
import Prodcard from '../../Components/UI/prodCard/prodCard'

/** 
* @author
* @function Products
**/

const Products = (props) => {
  const product = useSelector(state => state.product);
  const location = product.location;
  //console.log(location[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    //  console.log(props)
    const { match } = props;
    dispatch(getProductBySlug(match.params.slug))
  }, [])
  return (

    <div>
      <Header />
      <CategoryHeader />

      {

        Object.keys(product.locationWise).map((key, index) => {
          return (
            <div>

              <div className="header">
                <Navbar bg="dark" className="headingg" >
                  <span className="title"> {`${props.match.params.slug} Products In Disrict  ${location[key]}`}</span>
                </Navbar>
              </div>

              <div style={{ display: 'flex' }}>
                {
                  product.locationWise[key].map(product =>
                    <Link
                      to={`/${product.slug}/${product._id}/p`}
                      style={{ display: 'block' , textDecoration:"none" }}
                      className="productContainer">

                      <Prodcard name={product.name}
                        imgsrc={generatePublicUrl(product.productPicture[0].img)}
                        desc={product.description}
                        quantity={`${product.quantity} ${product.unit}`}
                        prize={product.price}
                        date="15 April" loc={product.district} />

                    </Link>
                  )
                }
              </div>
            </div>

          );
        })
      }
    </div>
  );


}

export default Products








// // import React, { Component } from "react";
// // import Prodcard from "../../Components/UI/prodCard/prodCard";
// // import { Col, Navbar, Container, Row } from "react-bootstrap";
// // import "./style.css";


// import React ,{ useEffect, useState } from 'react'
// import { getProductBySlug } from '../../actions';
// import { useDispatch, useSelector } from 'react-redux'
// import {generatePublicUrl} from '../../urlConfig' 
// import './style.css'
// import { Link } from 'react-router-dom';
// import Prodcard from "../../Components/UI/prodCard/prodCard";

// const ProductStore = (props) => {


//   const product = useSelector(state => state.product)


//   console.log(product)
//   console.log("helll")
//   const dispatch = useDispatch();
//   // useEffect(() => {
//   //   const { match } = props;

//   //   dispatch(getProductBySlug(match.params.slug))

//   // }, [])
// return(
//   <>
//   <h1>Hey bro</h1>
//   </>
// );

// }

// export default ProductStore;


// // const Proddis = (props) => {

// //   return (
// //     <Container>
// //       <Navbar bg="dark" className="heading">
// //         Products
// //         </Navbar>
// //       <div className="wrapper">
// //       <Row>
// //           <Prodcard name="Cauliflower" imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWc8_V7iN8kBFaROCMLwKrho3wmQybl_HeWQ&usqp=CAU" desc=" Some quick example text to build on the card title and make up the
// //               bulk of the card's content." quantity="100kg" prize="20/kg" date="15 April" loc="Nipana" />
// //           <Prodcard name="Alphonsa" imgsrc="https://www.mumbailive.com/images/media/images/images_1590578673566_mango.jpg?bg=dd8a1f&crop=1200%2C673.6842105263157%2C0%2C31.20833333333333&fit=crop&fitToScale=w%2C1368%2C768&h=768&height=749&w=1368&width=1200" desc=" Some quick example text to build on the card title and make up the
// //               bulk of the card's content." quantity="70kg" prize="50/kg" date="05 April" loc="Panavel" />
// //           <Prodcard name="Amrapali " imgsrc="https://img.dtnext.in/Images/Article/201606282329287654_Amrapali-mango-finding-takers-in-Dubai-Hong-Kong-and_SECVPF.gif" desc=" Some quick example text to build on the card title and make up the
// //               bulk of the card's content." quantity="60kg" prize="60/kg" date="27 April" loc="Malkapur" />
// //           <Prodcard name="Hapus" imgsrc="https://4.imimg.com/data4/KQ/GG/IMOB-40987966/img_20170420_000138-500x500.jpg" desc=" Some quick example text to build on the card title and make up the
// //               bulk of the card's content." quantity="80kg" prize="70/kg" date="19 April" loc="Nipana" />

// //         </Row>
// //         {/* <Prodcard name="" imgsrc="" desc="" quantity="" prize="" date="15 April" loc="Nipana"/> */}

// //       </div>
// //     </Container>
// //   );
// // }

// // export default Proddis;
