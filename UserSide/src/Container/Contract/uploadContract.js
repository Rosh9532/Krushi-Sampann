import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContract, getContracts } from '../../actions/contract.action'
import { Container, Form, Row, Col, Button, Card, Navbar } from "react-bootstrap";
import Input from '../../Components/UI/Input';
import "./style.css";
import Layout from '../../Components/Layout';

const UploadContract = (props) => {

  const [productName, setPname] = useState('');
  const [idproof, setIdproof] = useState([]);
  const [description, setDescription] = useState('');
  const [firmname, setFirmName] = useState('');
  const [reqQuantity, setReqQuantity] = useState('');
  const [regId, setRegId] = useState('');
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [startDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
 

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContracts());
  }, []);

  const submitContractForm = () => {
    const form = new FormData();
    form.append('productName', productName);
    form.append('description', description);
    form.append('reqQuantity', reqQuantity);
    form.append('firmname', firmname);
    form.append('regId', regId);
    form.append('startDate', startDate);
    form.append('EndDate', EndDate);
    form.append('address', address);
    form.append('city', city);
    form.append('district', district);
    form.append('postalCode', postalCode);
   
    for (let pic of idproof) {
      form.append('idproof', pic);
    }

    dispatch(addContract(form)).then(() => console.log("done"));
console.log(form)
  }
  const handleIdProofs = (e) => {
    setIdproof([
      ...idproof,
      e.target.files[0]
    ])
  }



  return (
    <>
    {/* <Layout/> */}
      <Card className="paper" style={{width:"80%" , height:"60%"}}>
        <Container >
          
            <Navbar bg="dark" className="heading" >
              <span className="title"> Register for contracts</span>
            </Navbar>
          <Row style={{width:'70%', margin:"auto"}}>
            <Col md={12} className="form">
            <Form >
              <Row>
                <Col>
                  <Input
                    label="Name of Product"
                    placeholder="Product Name"
                    value={productName}
                    type="text"
                    onChange={(e) => setPname(e.target.value)}
                  />
               </Col>
              </Row>
              <Row>  <Col>
                  <Input
                    label="Description"
                    placeholder="Description"
                    value={description}
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                  /> </Col>
              </Row>
              <Row> <Col>
                  <Input
                    label=" Required Quantity"
                    placeholder="Approximate Required Quantity"
                    value={reqQuantity}
                    type="text"
                    onChange={(e) => setReqQuantity(e.target.value)}
                  /> </Col>
              </Row>
              <Row> <Col>
                  <Input
                    label="Firm's Name"
                    placeholder="Your firm's Name"
                    value={firmname}
                    type="text"
                    onChange={(e) => setFirmName(e.target.value)}
                  /> </Col>
              </Row>
              <Row> <Col>
                  <Input
                    label="Reg Number of Firm "
                    placeholder="Reg Number of Firm"
                    value={regId}
                    type="text"
                    onChange={(e) => setRegId(e.target.value)}
                  />  </Col>
              </Row>
             

              <Row> <Col>
                  <Input
                    label="Address"
                    placeholder="Adrress"
                    value={address}
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                  /> </Col>
              </Row>
              <Row>  <Col>
                  <Input
                    label="Cirt"
                    placeholder="City"
                    value={city}
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                  />  </Col>
              </Row>
              <Row>  <Col>
                  <Input
                    label="District"
                    placeholder="District"
                    value={district}
                    type="text"
                    onChange={(e) => setDistrict(e.target.value)}
                  />  </Col>
              </Row>
              <Row>  <Col>
                  <Input
                    label="Postal Code"
                    placeholder="PIN Code"
                    value={postalCode}
                    type="text"
                    onChange={(e) => setPostalCode(e.target.value)}
                  /> </Col>
              </Row>

              <Row> <Col>
                  <Input
                    label="Duration"
                    placeholder="Expected Start Date"
                    value={startDate}
                    type="Date"
                    onChange={(e) => setStartDate(e.target.value)}
                  /> </Col>
              </Row> 
              <Row> <Col>
                  <Input
                    label="End Date"
                    placeholder="End Date"
                    value={EndDate}
                    type="Date"
                    onChange={(e) => setEndDate(e.target.value)}
                  /> </Col>
              </Row>
              

              <Form.File className="file-input"
          id="ifproof"
          label="Upload a valid Id proof (7-12 certificate/Pan card)"
          onChange={handleIdProofs}
          lang="en"
          custom
        />
            </Form> <br/>
             <Button style={{display:"flex", float:"right"}} variant="success" onClick={submitContractForm}>Submit</Button>
            </Col>
          </Row>

        </Container>
      </Card><br/>
    </>
  )

}

export default UploadContract