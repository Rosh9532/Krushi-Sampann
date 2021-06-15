import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col
} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import {NavLink,Link} from "react-router-dom"
import "./style.css";
import { signout } from '../../actions';

const Navigation = (props) => {
  const auth=useSelector(state=>state.auth)
  const dispatch=useDispatch();
  const logout=()=>{
      dispatch(signout())
  }
  const renderLoggedInLinks=()=>{
      return (
        <>
        <li className="nav-item">
                <NavLink className="nav-link" to ="/">Home</NavLink>
                </li>
            
                <li className="nav-item">
             <NavLink className="nav-link" to ="/"><span onClick={logout}>Signout</span></NavLink>
              </li>
                <NavDropdown title="Upload" id="collasible-nav-dropdown">
                 
                  <NavDropdown.Item >
                  <li className="">
                <NavLink className="navl" to ="/category">Create Category</NavLink>
                </li>
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                  <li className="nav-link">
                <NavLink className="navl" to ="/products">Products</NavLink>
                </li>
                  </NavDropdown.Item>
                </NavDropdown>
          </>
      );
  }

  const renderNonLoggedInLinks=()=>{
      return(
      <>
    <li className="nav-item">
            <NavLink className="nav-link" to ="/">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to ="signin">SignIn</NavLink>
            </li>           
            
      </>
      );
  }

    
  
  return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="Navsty"
      >
        <Navbar.Brand href="/" className="logo"> 
          {" "}
          कृषी संपन्न{" "}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="dropDown">
          <Nav className="mr-auto">
          {auth.authenticate?renderLoggedInLinks():renderNonLoggedInLinks()} 
          </Nav>

          <Col xs={12} xl="auto" >
            <Form inline >
              <Row>
                <Col xs={7}>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                </Col>
                <Col xs={2}>
                  <Button variant="success">Search</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Navbar.Collapse>
      </Navbar>
    );
  
}
export default Navigation;
