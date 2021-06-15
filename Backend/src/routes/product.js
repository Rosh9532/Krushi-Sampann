const express=require("express");
const router=express.Router();
const multer=require("multer");
const shortid=require("shortid");
const path=require('path');
const { requireSignin, farmerMiddleware } = require("../middleware");
const { createProduct , getProductsBySlug, getProducts, getProductDetailsById, deleteProductById, getProductByLocation} = require("../controllers/product");
const { getCategory } = require("../controllers/category");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate()+'-'+file.originalname)
    }
  })
  const upload=multer({storage})

router.post('/product/create',requireSignin,farmerMiddleware,upload.array('productPicture'),createProduct)  

router.get("/product/getProducts",requireSignin,farmerMiddleware,getProducts);

router.get('/category/getcategory',getCategory)



router.get('/products/:slug',getProductByLocation);


router.get("/product/:productId", getProductDetailsById);


router.delete(
  "/product/deleteProductById",
  requireSignin,
  farmerMiddleware,
  deleteProductById
);

module.exports=router;