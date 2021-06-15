const express=require("express");
const multer=require("multer");
const shortid=require("shortid");
const path=require('path');
const { addCategory, getCategory, deleteCategory } = require("../controllers/category");
const { requireSignin, farmerMiddleware } = require("../middleware");
const router=express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null,shortid.generate() + '-' + file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

router.post('/category/create',requireSignin,farmerMiddleware,upload.single('categoryImage'),addCategory);
router.get('/category/getcategory',getCategory);
router.post('/category/delete',deleteCategory)

module.exports=router;