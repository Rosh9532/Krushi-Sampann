const express=require("express");
const { intData } = require("../controllers/idata");
const { requireSignin } = require("../middleware");
const router=express.Router();



router.post('/intdata',requireSignin,intData);



module.exports=router;