import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContract, getContracts } from '../../actions/contract.action'
import { Container, Form, Row, Col, Button, Card, Navbar } from "react-bootstrap";
import Input from '../../components/UI/Input';
import "./style.css";
import Layout from '../../components/Layout';

const UploadContract = (props) => {

  const [productName, setPname] = useState('');
  const [idproof, setIdproof] = useState([]);
  const [description, setDescription] = useState('');
  const [productionCapacity, setProductionCapacity] = useState('');
  const [landArea, setLandArea] = useState('');
  const [seven_twelve_id, setSeven_twelve_id] = useState('');
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
    form.append('productionCapacity', productionCapacity);
    form.append('landArea', landArea);
    form.append('seven_twelve_id', seven_twelve_id);
    form.append('startDate', startDate);
    form.append('EndDate', EndDate);
   
    for (let pic of idproof) {
      form.append('idproof', pic);
    }

    dispatch(addContract(form)).then(() =>  dispatch(getContracts()) );
  }
  const handleIdProofs = (e) => {
    setIdproof([
      ...idproof,
      e.target.files[0]
    ])
  }

  return (
    <>
    <Layout/>
      <Card className="paper" style={{width:"80%" , height:"60%"}}>
        <Container>
  
            <Navbar bg="dark" className="heading" >
              <span className="title"> Register for contracts</span>
            </Navbar>
          <Row style={{width:'70%', margin:"auto"}}>
          
            <Col  className="form"  >
            <Form >
              <Row>
                <Col md={12}>
                  <Input
                    label="Name of Product"
                    placeholder="Product Name"
                    value={productName}
                    type="text"
                    onChange={(e) => setPname(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                  <Input
                    label="Description"
                    placeholder="Description"
                    value={description}
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                  />
              </Row>
              <Row>
                  <Input
                    label="Production Capacity"
                    placeholder="Production Capacity"
                    value={productionCapacity}
                    type="text"
                    onChange={(e) => setProductionCapacity(e.target.value)}
                  />
              </Row>
              <Row>
                  <Input
                    label="Land Area"
                    placeholder="Land Area"
                    value={landArea}
                    type="text"
                    onChange={(e) => setLandArea(e.target.value)}
                  />
              </Row>
              <Row>
                  <Input
                    label="7-12 ID "
                    placeholder="7-12 ID of your farm"
                    value={seven_twelve_id}
                    type="text"
                    onChange={(e) => setSeven_twelve_id(e.target.value)}
                  />
              </Row>
              <Row>
                  <Input
                    label="Duration"
                    placeholder="Expected Start Date"
                    value={startDate}
                    type="Date"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
              </Row>
              <Row>
                  <Input
                    label="End Date"
                    placeholder="End Date"
                    value={EndDate}
                    type="Date"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
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