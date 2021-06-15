const BuyReq=require("../models/buyreq");
const slugify=require("slugify");

exports.uploadbuyrequirement=(req,res)=>{
    const{name,expPrice,quantity,category}=req.body
    const buyerrequirement=new BuyReq({
        name,
        slug:slugify(name),
        expPrice,
        quantity,
        category,
        createdBy:req.user._id

    })
    buyerrequirement.save((err,productreq)=>{
        if(err){
            return res.status(500).json({
                message:"Error in uploading your requirement"
            })
        }
        if(productreq){
            return res.status(200).json({
                productreq
            })
        }
    })
}


exports.getbuyrequirements=(req,res)=>{
    BuyReq.find({},(err,product)=>{
        if(err){
            res.status(500).json({error})
        }
        if(product){
            res.status(200).json({product})
        }
    });
}