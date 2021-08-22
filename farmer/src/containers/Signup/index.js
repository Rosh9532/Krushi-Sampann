import React, { useState } from "react";
import Navbarr from '../../components/Header/Navbar'
import { Container, Form, Row, Col, Button, Card, Navbar } from "react-bootstrap";
import Input from "../../components/UI/Input";
// import { Redirect ,withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { signup } from "../../actions";
import { useEffect } from "react";
import axios from "../../helpers/axios"
import './style.css';

const Signup = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [AadharNo, setAdharNo] = useState("");

    //   const [error, setError] = useState("");
    //   const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    // const dispatch = useDispatch();
    const [redirect, setRe] = useState(false);

    useEffect(() => {
        if (!user.loading) {
            setFirstName("");
            setLastName("");
            setEmail("");
            setUsername("");
            setPassword("");
            setAddress("");
            setCity("");
            setDistrict("");
            setPostalCode("");
            setAdharNo("");
        }
    }, [user.loading]);

    const userSignup = (e) => {
        e.preventDefault();

        const user = {
            firstName,
            lastName,
            email,
            username,
            password,
            address,
            city,
            district,
            postalCode,
            AadharNo
        };
        // console.log(user)
        // dispatch(signup(user));

        axios.post('/farmerSignup', {
            ...user
        }).then(() => setRe(true));

        props.history.push('/signin');

        if (!redirect) {
            // return <Redirect to={`/signin`} />;
            console.log("redirect");
        }

    };
    // console.log(auth.authenticate)
    // console.log(user.authenticate)
    // if (auth.authenticate) {
    //     return <Redirect to={`/`} />;
    // }

    // if (user.authenticate) {
    //     return <Redirect to={`/`} />;
    // }

    return (
        <>
            <Navbarr />
            <Card className="paper">
                <Container>
                    <div className="header">
                        <Navbar bg="dark" className="heading" >
                            <span className="title"> Register</span>
                        </Navbar>

                    </div>


                    {user.message}
                    <Row style={{ marginTop: "50px" }}>
                        <Col md={{ span: 10, offset: 1 }}>
                            <Form onSubmit={userSignup}>
                                <Row>
                                    <Col md={6}>
                                        <Input
                                            label="First Name"
                                            placeholder="First Name"
                                            value={firstName}
                                            type="text"
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="Last Name"
                                            placeholder="Last Name"
                                            value={lastName}
                                            type="text"
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Input
                                            label="Email"
                                            placeholder="Email"
                                            value={email}
                                            type="email"
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="Adhar Number"
                                            placeholder="Adhar Number"
                                            value={AadharNo}
                                            type="number"
                                            required
                                            onChange={(e) => setAdharNo(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Input
                                            label="Username"
                                            placeholder="Phone Number"
                                            value={username}
                                            type="number"
                                            required
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="Password"
                                            placeholder="Password"
                                            value={password}
                                            type="password"
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Input
                                            label="Address"
                                            placeholder="Street"
                                            value={address}
                                            type="text"
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="City/Village"
                                            placeholder="Name of place"
                                            value={city}
                                            type="text"
                                            onChange={(e) => setCity(e.target.value)}
                                        />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Input
                                            label="District"
                                            placeholder="District"
                                            value={district}
                                            type="text"
                                            onChange={(e) => setDistrict(e.target.value)}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="Postal Code"
                                            placeholder="PIN"
                                            value={postalCode}
                                            type="number"
                                            onChange={(e) => setPostalCode(e.target.value)}
                                        />

                                    </Col>
                                </Row>
                                <Button variant="success" type="submit" className="authBtn">
                                    Submit
                                </Button>


                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </>
    );
};

export default Signup;