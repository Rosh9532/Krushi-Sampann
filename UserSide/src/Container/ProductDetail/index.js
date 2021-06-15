import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetailsById } from '../../actions';
import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles.css"
import { generatePublicUrl } from '../../urlConfig';
import { Link } from 'react-router-dom';

/**
* @author
* @function ProductDetail
**/

const ProductDetail = (props) => {
    const dispatch=useDispatch();
    const product=useSelector(state=>state.product);
    useEffect(()=>{
        const {productId}=props.match.params;
        const payload = {
            params: {
              productId
            }
          }
          dispatch(getProductDetailsById(payload))
    },[]);

    const timestamp =  product.productDetails.createdAt
    
const date = new Date(timestamp);
const doc=date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()

    if(Object.keys(product.productDetails).length === 0){
        return null;
      }

      if(Object.keys(product.productDetails).length === 0){
        return null;
      }   

  return(
    <div>
         <div className="m">
        <Container className="mbox" fluid>
          <Row>
            <Col sm={12} lg={6} className="lsec">
              <div>
                <div className="imgheading">{product.productDetails.name}</div>
                <hr />
                <div className="imglay" fluid>
                  <img
                    className="imgs"
                    src={generatePublicUrl(product.productDetails.productPicture[0].img)}
                    
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} lg={6} className="rsec">
              <div>
                <Row>
                  <Col sm={12} lg={6} className="btext">
                    Product Name :
                  </Col>
                  <Col sm={12} lg={6}>
                  {product.productDetails.name}
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={12} lg={6} className="btext">
                    Description :
                  </Col>
                  <Col sm={12} lg={12}>
                  {product.productDetails.description}
                  </Col>
                </Row>
                <hr />

                <Row>
                  <Col sm={12} lg={6} className="btext">
                    Price :
                  </Col>
                  <Col sm={12} lg={6}>
                  {product.productDetails.price}
                  </Col>
                </Row>
                <hr />

                <Row>
                  <Col sm={12} lg={6} className="btext">
                    Upload Date :
                  </Col>
                  <Col sm={12} lg={6}>
                  {doc}
                  </Col>
                </Row>
                <hr />

                <Row>
                  <Col sm={12} lg={6} className="btext">
                    Locality :
                  </Col>
                  <Col sm={12} lg={6}>
                    {product.productDetails.district}
                  </Col>
                </Row>
                <hr />

                <Row>
                  <Col sm={12} lg={6} className="btext">
                    Producer :
                  </Col>
                  <Col sm={12} lg={6}>
                  {product.productDetails.createdBy.firstName}  {product.productDetails.createdBy.lastName}
                  </Col>
                </Row>
                <hr />

                <Row>
                  <Col sm={12} lg={6} className="btext">
                    Contact :
                  </Col>
                  <Col sm={12} lg={6}>
                  {product.productDetails.createdBy.username}
                  </Col>
                </Row>

                <div className="bttns">
                  <Button variant="secondary">Back</Button>
                  {"  "}
                  <Link to ="/cart"><Button variant="success">Add to Cart</Button></Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
   )

 }

export default ProductDetail;