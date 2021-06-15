import React from "react";
import { Col, Container, Row } from 'react-bootstrap'
import Input from '../../../components/UI/Input'
import Modal from '../../../components/UI/Modal';



const AddCategoryModal=(props)=>{

    const {
        show,
        handleClose,
        modalTitle,
        categoryName,
        setcategoryName,
        parentCategoryId,
        setparentCategoryId,
        categoryList,
        handleCategoryImage,
        onSubmit
    }=props

    return(
      <Modal
        show={show}
        handleClose={handleClose}
        onSubmit={onSubmit}
        modalTitle={modalTitle}
      >
      <Row>
          <Col>
          <Input
          value={categoryName}
          placeholder={'Category Name'}
          onChange={(e) => setcategoryName(e.target.value)}
        />
          </Col>
             
          <Col>
          <select
          className="form-control"
          value={parentCategoryId}
          onChange={(e) => setparentCategoryId(e.target.value)}
           className="form-control-sm"
        >
          <option>Select Category</option>
          {
            categoryList.map(option =>
              <option key={option.value} value={option.value}>{option.name}</option>
            )
          }
        </select>
          </Col>

          <Col>
          <input type="file" name="categoryImage" onChange={handleCategoryImage} />
          </Col>
      </Row>

        
        

        

      </Modal>
    );
  }

  export default AddCategoryModal;