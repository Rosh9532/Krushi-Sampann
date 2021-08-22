import React , { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MdAccountCircle } from "react-icons/md";
// import Layout from "../../components/Layout";
import "./profile.css";
import { useDispatch, useSelector } from 'react-redux'
import Layout from "../../Components/Layout";

const Profile = (props) => {
    const auth = useSelector(state => state.auth)
    console.log(auth)
    return (<>
        <Layout />


        <Container className="mbod" fluid>
            <Row style={{ display: "flex", justifyContent: "center" }}>
                <MdAccountCircle fontSize="9rem" className="pico" />
                <br />
            </Row>

            <hr />
            <div className="infobody">
                <Row className="grp">
                    <Col lg={3} className="btextp">
                        First Name :
            </Col>
                    <Col lg={6}>{auth.user.firstName}</Col>
                </Row>

                <Row className="grp">
                    <Col lg={3} className="btextp">
                        Last Name :
            </Col>
                    <Col lg={6}>{auth.user.lastName}</Col>
                </Row>

                <Row className="grp">
                    <Col lg={3} className="btextp">
                        Adhar Number :
            </Col>
                    <Col lg={6}>{auth.user.AadharNo}</Col>
                </Row>

                <Row className="grp">
                    <Col lg={3} className="btextp">
                        Phone Number :
            </Col>
                    <Col lg={6}>{auth.user.username}</Col>
                </Row>

                <Row className="grp">
                    <Col lg={3} className="btextp">
                        Email ID :
            </Col>
                    <Col lg={6}>{auth.user.email}</Col>
                </Row>

                <Row className="grp">
                    <Col lg={3} className="btextp">
                        Address :
            </Col>
                    <Col lg={6} className="addtext">
                    
            </Col>
                </Row>

                <Row className="grp">
                    <Col lg={3} className="btextp">
                        District :
            </Col>
                    <Col lg={6}></Col>
                </Row>
                <hr />
                <br />
                <Row>
                    <Col lg={11} xs={5}>
                        <Button
                            variant="outline-success"
                            style={{
                                float: "right",
                                marginBottom: "1rem",
                                borderRadius: "1rem",
                                width: "5rem"
                            }}
                        >
                            Back
              </Button>
                    </Col>
                    {/* <Col lg={2} xs={7}>
                        <Button
                            variant="success"
                            style={{
                                float: "right",
                                marginRight: "4px",
                                borderRadius: "1rem",
                                marginBottom: "15px",
                                width: "auto"
                            }}
                        >
                            Products
              </Button>
                    </Col> */}
                </Row>
            </div>
        </Container><br /><br /><br />

    </>
    );

}
export default Profile;
