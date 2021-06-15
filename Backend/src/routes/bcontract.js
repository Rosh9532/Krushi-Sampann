const express=require("express");
const { requireSignin,buyerMiddleware } = require("../middleware");
const router=express.Router();
const multer=require("multer");
const shortid=require("shortid");
const path=require('path');
const { bcreateContract, getbContracts } = require("../controllers/bcontract");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null,shortid.generate() + '-' + file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

router.post('/create/bcontract',requireSignin,buyerMiddleware,upload.array('idproof'),bcreateContract);
router.get('/contract/getbContracts',requireSignin,getbContracts);

module.exports=router;