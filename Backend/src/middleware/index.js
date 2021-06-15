const jwt=require("jsonwebtoken");

exports.requireSignin=(req,res,next)=>{
    if(req.headers.authorization){
        const token=req.headers.authorization.split(' ')[1];
        const user=jwt.verify(token,process.env.JWT_SECRET);
        req.user=user;
    }else{
        // console.log(error)
       return res.status(500).json({error});
    }
    next();
};

exports.farmerMiddleware=(req,res,next)=>{
    if(req.user.role!=="farmer"){
        return res.status(500).json({message:"Only farmer can create categories"})
    }
    next();
};

exports.buyerMiddleware=(req,res,next)=>{
    if(req.user.role!=="buyer"){
        return res.status(500).json({message:"Buyer access denied"})
    }
    next();
};
