import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { Col, Container, Row, Form, Navbar } from 'react-bootstrap'
import { useState } from 'react'
import Input from '../../components/UI/Input'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProductById, getProducts } from '../../actions'
import Modal from '../../components/UI/Modal';
import './styles.css'
import { generatePublicUrl } from '../../urlConfig'
import Prodcard from '../../components/UI/Prodcard/prodcard2'
import { FaRupeeSign } from "react-icons/fa";
import CardLoader from '../../components/Loaders/cardsLoader'
//upload and render of myProduct
const Products = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [district, setDistrict] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [productPictures, setProductPictures] = useState([]);
  const [productDetailModal, setProductDetailModal] = useState(false)
  const [productDetails, setProductDetails] = useState(null)
  const category = useSelector(state => state.category);
  const product = useSelector(state => state.product)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const submitProductForm = () => {
    const form = new FormData();
    form.append('name', name);
    form.append('price', price);
    form.append('district', district);
    form.append('quantity', quantity);
    form.append('unit', unit);
    form.append('description', description);
    form.append('category', categoryId);

    for (let pic of productPictures) {
      form.append('productPicture', pic);
    }

    dispatch(addProduct(form)).then(() => {setShow(false)
      dispatch(getProducts())
    } );
    
  }

  const handleShow = () => setShow(true);

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name })
      if (category.children.length > 0) {
        createCategoryList(category.children, options)
      }
    }
    return options;
  }

  const handleProductPictures = (e) => {
    setProductPictures([
      ...productPictures,
      e.target.files[0]
    ])
  }

  const renderProducts = () => {
    return (
      <>     <div className="wrapper">            {
        product.products.length > 0 ?
          product.products.map(
            product =>
              <div key={product._id} >
                <Prodcard name={product.name}
                  date="15 April" loc={product.district}
                  desc={product.description}
                  prize={product.price}
                  quantity={product.quantity}
                  imgsrc={generatePublicUrl(product.productPicture[0].img)}
                  onDelClick={() => {
                    const payload = {
                      productId: product._id,
                    };
                    dispatch(deleteProductById(payload));
                    dispatch(getProducts());
                  }}
                  onSaveClick={() => showProductDetailsModal(product)}
                />
              </div>
          ) : <CardLoader row ="2" col="4" />
      }
      </div>

      </>
    )
  }


  const renderAddProductModal = () => {
    return (
      <Modal
        show={show}
        handleClose={handleClose}
        modalTitle={'Add New Product'}
        onSubmit={submitProductForm}
      >
        <Input
          label="Name"
          value={name}
          placeholder={'Product Name'}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          label="Price"
          value={price}
          placeholder={'Price'}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Row>
          <Col md={6}>
            <Input
              label="Quantity"
              value={quantity}
              placeholder={'Quantity'}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Col>
          <Col md={6} className="justify-containt-center">
            <label>Select Unit</label>
            <select
              className="form-control"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >

              <option default value="Kg">Kg</option>
              <option value="Quintal">Quintal</option>
              <option value="Ton">Ton</option>
              <option value="Dozen">Dozen</option>
            </select>
          </Col>
        </Row>

        <Input
          label="Description"
          value={description}
          placeholder={'Description'}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          label="Location"
          value={district}
          placeholder={'District'}
          onChange={(e) => setDistrict(e.target.value)}
        />

        <select
          className="form-control"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option>Select Category</option>
          {
            createCategoryList(category.categories).map(option =>
              <option key={option.value} value={option.value}>{option.name}</option>
            )
          }
        </select>

        {
          productPictures.length > 0 ?
            productPictures.map((pic, index) => <div key={index}>{pic.name}</div>) : null
        }
        <Form.File className="file-input"
          id="productPicture"
          label="Add Product Picture"
          onChange={handleProductPictures}
          lang="en"
          custom
        />

      </Modal>
    )
  }

  const handleCloseProductDetailModal = () => {
    setProductDetailModal(false)
  }

  const showProductDetailsModal = (product) => {
    setProductDetails(product);
    setProductDetailModal(true)
    console.log(product)
  }

  const renderProductDetailModal = () => {
    if (!productDetails) {
      return null
    }
    return (
      <Modal
        show={productDetailModal}
        handleClose={handleCloseProductDetailModal}
        modalTitle={'Product Details'}
        size="lg"
        
      >
        <div className="detailsModal">
        <Row>
          <Col md="6">
            <label className="key">Name</label>
            <p className="value">{productDetails.name}</p>
          </Col>
          <Col md="6">
            <label className="key">Price </label>
            <p className="value">{` ${productDetails.price}`}<FaRupeeSign /></p>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <label className="key">Quantity</label>
            <p className="value">{`${productDetails.quantity} ${productDetails.unit}`}</p>
          </Col>
          <Col md="6">
            <label className="key">Category</label>
            <p className="value">{productDetails.category.name}</p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <label className="key">Description</label>
            <p className="value">{productDetails.description}</p>
          </Col>
          <Col md="6">
            <label className="key">Location</label>
            <p className="value">{productDetails.district}</p>
          </Col>
        </Row>
        <Row>
          <Col >
            <label className="key">Product Pictures</label>
            <div style={{ display: "flex" }}>
              {productDetails.productPicture.map(picture =>
                <div className="productImgContainer">
                  <img src={generatePublicUrl(picture.img)} />
                </div>
              )}
            </div>
          </Col>
        </Row>
        </div>
      </Modal>
    )
  }
  return (
    <Layout>
      <Container>
        <Row>
          <Col md-={12}>

            <Navbar bg="dark" className="heading">
              My Products
        </Navbar>

          </Col>
        </Row>
        <Row>
          
            {renderProducts()}
         
        </Row>
        <div >
          <button className="addButton" onClick={handleShow}>ADD</button>
        </div>
      </Container>
      {renderAddProductModal()}
      {renderProductDetailModal()}
    </Layout>
  );
}
export default Products;

