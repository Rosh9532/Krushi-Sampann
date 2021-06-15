const express=require("express")
const {buyerSignup,buyerSignin}=require('../controllers/buyer');
//const { validateSigninRequest, isRequestValidated, validateSignupRequest } = require("../validators/user");
const router=express.Router();

router.post('/buyerSignup',buyerSignup);
router.post('/buyerSignin',buyerSignin);

module.exports=router;