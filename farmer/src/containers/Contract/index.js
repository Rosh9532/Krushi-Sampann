import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContracts } from '../../actions/contract.action'
import Layout from '../../components/Layout'
import { Navbar } from "react-bootstrap";
import "./style.css"
import Concard from '../../components/UI/Concard';
import CardLoader from '../../components/Loaders/cardsLoader';

const ViewContract = (props) => {
  const contracts = useSelector(state => state.contracts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContracts());
  }, [])

  const dateFormater = (props) => {
    const date = new Date(props);
    const formated = date.getDate() +
      "/" + (date.getMonth() + 1) +
      "/" + date.getFullYear()
    return formated
  }
  const renderContracts = () => {
    return (
      <>
        <div className="header">
          <Navbar bg="dark" className="heading" >
            <span className="title"> Contracts</span>
          </Navbar>

        </div>
        <div className="wrapperrr">            {
          contracts.contracts.length > 0 ?
            contracts.contracts.map(
              contracts =>
                <div key={contracts._id} >

                  <Concard
                    pname={contracts.productName}
                    desc={contracts.description}
                    sdate={dateFormater(contracts.ContractDuration.startDate)}
                    edate={dateFormater(contracts.ContractDuration.EndDate)}
                    today={dateFormater(contracts.updatedAt)}
                    fname={contracts.createdBy.firstName}
                    lname={contracts.createdBy.lastName}
                    area={contracts.landArea}
                    pcap={contracts.productionCapacity}
                    distric={contracts.locOfFarmer.Address.district}
                    loc={`${contracts.locOfFarmer.Address.address} , ${contracts.locOfFarmer.Address.city} , ${contracts.locOfFarmer.Address.district} , ${contracts.locOfFarmer.Address.postalCode}.`}
                    phoneno={'9278*******'}    // createdby.username
                  />
                </div>
            ) : <div> <h2>No contracts data to show , kindly register to the platform First</h2> <CardLoader row ="2" col="4" /> </div>
        }
        </div>
      </>
    )
  }

  const handleShow = ()=> props.history.push('/uploadContract');
  return (
    <>
      <Layout />
        <button className="addBtn" onClick={handleShow} style={{display:"flex", justifyContent:"center" ,}}>Add Contracts</button>
      {renderContracts()}
    </>
  )
}

export default ViewContract