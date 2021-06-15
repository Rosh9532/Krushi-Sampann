const express=require('express');


const {addItemToCart, getCartItems, removeCartItems}=require('../controllers/cart')
const {buyerMiddleware,requireSignin}=require('../middleware')
const router=express.Router();


router.post('/user/cart/addtocart',requireSignin,buyerMiddleware,addItemToCart)
router.post("/user/getCartItems", requireSignin, buyerMiddleware, getCartItems);

// router.post(
//     "/user/cart/removeItem",
//     requireSignin,
//     buyerMiddleware,
//     removeCartItems
//   );


module.exports=router;