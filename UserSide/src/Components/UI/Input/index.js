import React from 'react'
import { Form } from "react-bootstrap";

/**
* @author
* @function Input
**/

const Input = (props) => {
  let input = null;
  switch (props.type) {
  
    default:
      input = <Form.Group>
        {props.label && <Form.Label>{props.label}</Form.Label>}

        <Form.Control className="input"
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          {...props}

        />
        <Form.Text className="text-muted">
          {props.errorMessage}
        </Form.Text>
      </Form.Group>
  }
  return input;


}

export default Input