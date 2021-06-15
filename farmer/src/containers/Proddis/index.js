import React, { Component } from "react";
import Prodcard from "../../components/UI/Prodcard";
import { Col, Navbar, Container, Row } from "react-bootstrap";
import "./style.css";

const Proddis = (props) => {

  return (
    <Container>
      <Navbar bg="dark" className="heading">
        Products
        </Navbar>
      <div className="wrapper">
        <Row>
          <Prodcard name="Cauliflower" imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWc8_V7iN8kBFaROCMLwKrho3wmQybl_HeWQ&usqp=CAU" desc=" Some quick example text to build on the card title and make up the
              bulk of the card's content." quantity="100kg" prize="20/kg" date="15 April" loc="Nipana" />
          <Prodcard name="Alphonsa" imgsrc="https://www.mumbailive.com/images/media/images/images_1590578673566_mango.jpg?bg=dd8a1f&crop=1200%2C673.6842105263157%2C0%2C31.20833333333333&fit=crop&fitToScale=w%2C1368%2C768&h=768&height=749&w=1368&width=1200" desc=" Some quick example text to build on the card title and make up the
              bulk of the card's content." quantity="70kg" prize="50/kg" date="05 April" loc="Panavel" />
          <Prodcard name="Amrapali " imgsrc="https://img.dtnext.in/Images/Article/201606282329287654_Amrapali-mango-finding-takers-in-Dubai-Hong-Kong-and_SECVPF.gif" desc=" Some quick example text to build on the card title and make up the
              bulk of the card's content." quantity="60kg" prize="60/kg" date="27 April" loc="Malkapur" />
          <Prodcard name="Hapus" imgsrc="https://4.imimg.com/data4/KQ/GG/IMOB-40987966/img_20170420_000138-500x500.jpg" desc=" Some quick example text to build on the card title and make up the
              bulk of the card's content." quantity="80kg" prize="70/kg" date="19 April" loc="Nipana" />

        </Row>
        {/* <Prodcard name="" imgsrc="" desc="" quantity="" prize="" date="15 April" loc="Nipana"/> */}

      </div>
    </Container>
  );
}

export default Proddis;
