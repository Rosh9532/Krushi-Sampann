const express=require("express")
const router=express.Router();
const {uploadbuyrequirement,getbuyrequirements}=require('../controllers/buyreq');
const {requireSignin,buyerMiddleware, farmerMiddleware}=require("../middleware");


router.post('/buyer/uploadrequirement',requireSignin,buyerMiddleware,uploadbuyrequirement)
router.get('/buyer/getprorequirement',requireSignin,farmerMiddleware,getbuyrequirements)

module.exports=router;