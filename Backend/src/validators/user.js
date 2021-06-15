const {check,validationResult}=require("express-validator");


exports.validateSignupRequest=[
   check('firstName')
   .notEmpty()
   .withMessage('firstName is required'),

   check('lastName')
   .notEmpty()
   .withMessage('lastName is required'),

   check('email')
   .isEmail()
   .withMessage('E-mail is required'),

   check('password')
   .isLength({min:6})
   .withMessage('Password is required'),

   check('username')
   .isMobilePhone()
   .withMessage('Only 10 digits is valid'),

   check('address')
   .notEmpty()
   .withMessage('Address is required'),

   check('city')
   .notEmpty()
   .withMessage('City is required'),

   check('district')
   .notEmpty()
   .withMessage('District is required'),

//    check('postalCode')
//    .isPostalCode()
//    .withMessage('enter valid postal code'),

];

exports.validateSigninRequest=[
    check('password')
    .isLength({min:6})
    .withMessage('Password must be atleast 6 characters'),
    check('username')
    .isMobilePhone()
    .withMessage('Only 10 digits')
]

exports.isRequestValidated=(req,res,next)=>{
    const errors=validationResult(req);
    if(errors.array().length>0){
        return res.status(500).json({error:errors.array()[0].msg})
    }
    next();
}