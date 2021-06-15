import {React, useState} from 'react'
import { Row } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast'
const PopUp = (props) => {
    const [show, setShow] = useState(false);
//make a custom one!
    return (
      <Row>
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">props.header</strong>
              <small>props.time</small>
            </Toast.Header>
            <Toast.Body>props.message </Toast.Body>
          </Toast>
          <h1>HEY THIS IS TOAST BRO</h1>
      </Row>
    );
  }
  export default PopUp;
  