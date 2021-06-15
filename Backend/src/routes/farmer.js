const express=require("express")
const {farmerSignup,farmerSignin}=require('../controllers/farmer');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require("../validators/user");
const router=express.Router();

router.post('/farmerSignup',validateSignupRequest,isRequestValidated,farmerSignup);
router.post('/farmerSignin',validateSigninRequest,isRequestValidated,farmerSignin);

module.exports=router;
