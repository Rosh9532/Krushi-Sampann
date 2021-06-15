const express=require("express");
const { createContract, getContracts } = require("../controllers/contract");
const { requireSignin, farmerMiddleware } = require("../middleware");
const router=express.Router();
const multer=require("multer");
const shortid=require("shortid");
const path=require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null,shortid.generate() + '-' + file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

router.post('/create/contract',requireSignin,farmerMiddleware,upload.array('idproof'),createContract);
router.get('/contract/getContracts',requireSignin,getContracts);

module.exports=router;