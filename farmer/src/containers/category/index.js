import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Navbar ,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, getAllCategory } from "../../actions"
import Layout from '../../components/Layout'
import { } from "react-icons/io";
import AddCategoryModal from './components/AddCategoryModal'
import './cat.css'
import CatLoader from '../../components/Loaders/catgoryLoader'
/**
* @author
* @function Category
**/

const Category = (props) => {
  const [show, setShow] = useState(false);
  const [categoryName, setcategoryName] = useState('');
  const [parentCategoryId, setparentCategoryId] = useState('');
  const [categoryImage, setcategoryImage] = useState('');
  const category = useSelector(state => state.category)
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  useEffect(() => {
    if (!category.loading) {
      setShow(false)
    }
  }, [category.loading]);

  const handleClose = () => {

    if (categoryName === "") {
      alert("category name is required")
      setShow(false);
      return;
    }

    const form = new FormData();
    form.append('name', categoryName);
    form.append('parentId', parentCategoryId)
    form.append('categoryImage', categoryImage)
    dispatch(addCategory(form));
    setcategoryName('');
    setparentCategoryId('');
    setShow(false);
    dispatch(getAllCategory());
   
  }

  const handleShow = () => setShow(true);


  const renderCategories = (categories) => {
    let mycategories = [];
    for (let category of categories) {
      mycategories.push(
        <>
          <div className="scrolling-wrapper">
            <div style={{ margin: '8px' }}>
                 <Button
              variant="outline-success alert-success"
              className="mcat"
              style={{ width: "10rem",float: 'left'}}
            >
              {category.name} 
            </Button>

            </div>
            {/* {category.children.length > 0 ? (<div className="cardd " style={{ margin: '0px', backgroundColor: "", border: ""  }}>{renderCategories(category.children)}</div> ) : null} */}
            {category.children.length > 0 ? (<Col sm={12}> <Card    className="cardd " style={{float: 'left' ,width:'100%'  }} variant="sucess">
          {renderCategories(category.children)}
            </Card> </Col> ) : null}
          </div>
        </>
      );
    }
    return mycategories;
  }

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({
        value: category._id,
        name: category.name,
        categoryImage: category.categoryImage,
        parentId: category.parentId,
        type: category.type
      })
      if (category.children.length > 0) {
        createCategoryList(category.children, options)
      }
    }
    return options;
  }
  const handleCategoryImage = (e) => {
    setcategoryImage(e.target.files[0]);
  }

  return (
    <Layout > 
      <Container>
      {category.loading ?  
     ( <div>
        <Row>
          <Col md-={12}>
            <div style={{ display: '', justifyContent: 'space-between' }}>
              <Navbar bg="dark" className="heading" >
                <span className="title"> Category</span>
              </Navbar>
            </div>
          </Col>
        </Row>
        
        <Row >
          <Col  sm={12}>
            
              {renderCategories(category.categories)}
              <Button variant="success" className= "addButton" onClick={handleShow}>ADD</Button>
           
          </Col>
        </Row>  </div
>       ) : <div className="loader" ><CatLoader /> </div>
} 
</Container>

      <AddCategoryModal
        show={show}
        handleClose={() => setShow(false)}
        onSubmit={handleClose}
        modalTitle={'Add New Category'}
        size="lg"
        categoryName={categoryName}
        setcategoryName={setcategoryName}
        parentCategoryId={parentCategoryId}
        setparentCategoryId={setparentCategoryId}
        categoryList={createCategoryList(category.categories)}
        handleCategoryImage={handleCategoryImage}
      />

 

    </Layout>
  )

}

export default Category