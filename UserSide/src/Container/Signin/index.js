import React, {useState  } from 'react'
import Header from '../../Components/Header'
import { Container, Row, Col, Form, Button,Card ,Navbar} from "react-bootstrap"
import Input from '../../Components/UI/Input'
import {login} from "../../actions"
import { useDispatch, useSelector } from "react-redux";
import { Redirect,Link } from 'react-router-dom'
import './style.css';
/**
* @author
* @function Signin
**/

const Signin = (props) => {
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('');
    const [error,setError]=useState('');
    const auth=useSelector(state=>state.auth);  //to access store state
    const dispatch=useDispatch();
  

    const userLogin=(e)=>{
    e.preventDefault()
        const user={
        username,
        password
        }
        console.log(user)
        dispatch(login(user))
        
    }
    if(auth.authenticate){
        return <Redirect to={'/'}/>
    }                             
  return(
    <>
           <Header/>
           
<Card className="paper">
              
                    
                <Container>
                <div className="header">
                <Navbar bg="dark" className="heading">
          Sign In
        </Navbar>
       </div>
                    <Row style={{marginTop:'50px'}}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit={userLogin}>
                            

                            <Input
                                   label="Phone Number"
                                   placeholder="Phone Number"
                                   value={username}
                                   type="tel"
                                   onChange={(e)=>setusername(e.target.value)}
                            />

                                <Input
                                    label="Password"
                                   placeholder="Password"
                                   value={password}
                                   type="password"
                                   onChange={(e)=>setpassword(e.target.value)}
                                />
                                <Button variant="success" type="submit" style={{display:"flex", float:"right"}}>
                                    Log In
                                </Button>
                                <br/>
                                
                                <Link  to="/signup" ><span className="center">Don't have account? SignUp</span></Link>
                            </Form>

                        </Col>
                    </Row>
                    
                </Container>
               
                </Card>
        </>
   )

 }

export default Signin