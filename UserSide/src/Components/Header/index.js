import React from "react";
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
import { NavLink, Link, Redirect } from "react-router-dom"
import "./Navigation.css";
import { signout } from '../../actions';

const Header = (props) => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout())
  }
  const renderLoggedInLinks = () => {
    return (
      <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" Redirect to="/signin" onClick={logout}>Signout</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" Redirect to="/profile" >Profile</NavLink>
        </li>
        {/* <li className="nav-item">
              <NavLink className="nav-link" onClick={logout} href="/signin">Signout</NavLink>
          </li> */}

        <NavDropdown title="More" id="collasible-nav-dropdown" >
          <NavDropdown.Item className="nlink" href="http://localhost:4000/">Sell As Farmer</NavDropdown.Item>

          <NavDropdown.Item ><Link className="nlink" to="/contracts">Upload Contracts </Link></NavDropdown.Item>
          <NavDropdown.Item ><Link className="nlink" to="uploadProd">Upload Requirements</Link></NavDropdown.Item>
        </NavDropdown>

      </>
    );
  }

  const renderNonLoggedInLinks = () => {
    return (
      <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="signin">SignIn</NavLink>
        </li>

        <NavDropdown title="More" id="collasible-nav-dropdown">
          <NavDropdown.Item className="nlink" href="http://localhost:4000/">Sell As Farmer</NavDropdown.Item>
          <NavDropdown.Item ><Link className="nlink" to="signin">Upload Requirements</Link></NavDropdown.Item>
        </NavDropdown>
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
          {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
        </Nav>

        <Col xs={12} xl="auto">
          <Form inline>
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
export default Header;
