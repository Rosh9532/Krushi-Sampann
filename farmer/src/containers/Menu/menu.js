import React from "react";
import { FaFileUpload } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { ImFolderUpload } from "react-icons/im";
import { MdAccountCircle } from "react-icons/md";
import { CgListTree } from "react-icons/cg";
import { BsFilePost } from "react-icons/bs";

import { Container, Card, Navbar } from "react-bootstrap";
import './style.css';
import {Link} from 'react-router-dom'

const Menu = () => {
  
    return (
      <Container className="containerr">
        <Navbar bg="dark" className="heading">
          Features
        </Navbar>

        <div className="cb">
          <Card
            style={{ width: "14rem", padding: "1rem", height: "15rem" }}
            className="fcard">
            <Card.Body >
            <Link to ="/products"> <FaFileUpload fontSize="9rem" className="icoBlack" /> </Link> 
              <div className="fhcard">
                <p>Upload post</p>
              </div>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "14rem", padding: "1rem", height: "15rem" }}
            className="fcard">
            <Card.Body >
            <Link to ="/category"> <CgListTree fontSize="9rem" className="icoBlack" /> </Link> 
              <div className="fhcard">
                <p>Category</p>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: "14rem", height: "15rem" }} className="fcard">
            <Card.Body>
            <Link to ="/reqPost"> <BsFilePost fontSize="8rem" className="icoBlack" /></Link> 
              <div className="fhcard">
                <p>Buyer's Requirements</p>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "14rem", height: "15rem" }} className="fcard">
            <Card.Body>
            <Link to ="/contract"> <FaFileAlt fontSize="9rem" className="icoBlack" /></Link> 
              <div className="fhcard">
                <p>Contracts</p>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "14rem", height: "15rem" }} className="fcard">
            <Card.Body>
            <Link to ="/uploadcontract"> <ImFolderUpload fontSize="8rem" className="icoBlack" /></Link> 
              <div className="fhcard">
                <p>Upload Contracts</p>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "14rem", height: "15rem" }} className="fcard">
            <Card.Body>
            <Link to ="profile">  <MdAccountCircle fontSize="9rem"  className="ico" /> </Link>
              <div className="fhcard">
                <p>Profile</p>
              </div>
            </Card.Body>
          </Card>

        </div>
      </Container>
    );
  
}
export default Menu;
