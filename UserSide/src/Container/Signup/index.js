import React, { useState } from "react";
import Header from '../../Components/Header'
import { Container, Form, Row, Col, Button, Card, Navbar } from "react-bootstrap";
import Input from "../../Components/UI/Input";
//import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../actions";
import { useEffect } from "react";
import './style.css';
/**
 * @author
 * @function Signup
 **/

const Signup = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");


    //  const [error, setError] = useState("");
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user.loading) {
            setFirstName("");
            setLastName("");
            setEmail("");
            setUsername("");
            setPassword("");
            setCpassword("");

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

        };

        //password confirm
        (password === cpassword) ? dispatch(signup(user)) : alert("password not matched.")
        //can use some toast to show this msg
    };

    if (auth.authenticate) {
        // return <Redirect to={`/`} />;
        props.history.push('/signin');
    }

    if (user.loading) {
        props.history.push('/signin');

    }

    return (
        <>
            <Header />
            <Card className="paper">
                <Container>
                    <div className="header">
                        <Navbar bg="dark" className="heading">
                            Sign Up
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
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Col>

                                    <Col md={6}>
                                        <Input
                                            label="Username"
                                            placeholder="Phone Number"
                                            value={username}
                                            type="number"
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </Col>

                                </Row>
                                <Row>

                                    <Col md={6}>
                                        <Input
                                            label="Password"
                                            placeholder="Password"
                                            value={password}
                                            type="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="Confirm Password"
                                            placeholder="Confirm Password"
                                            value={cpassword}
                                            type="password"
                                            onChange={(e) => setCpassword(e.target.value)}

                                        //  compare with previous one and give alert if not same
                                        />
                                    </Col>
                                </Row>
                                <Row >
                                    <Button variant="success" type="submit" className="authBtn"  style={{ display: "flex", float: "right" }}>
                                        Submit
                                    </Button>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </>
    );
};

export default Signup;