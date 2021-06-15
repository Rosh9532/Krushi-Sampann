const mongoose=require("mongoose");
const buyerRequirementSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    expPrice:{
        type:String
    },
    quantity:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,ref:'Category',

    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,ref:'Buyer',
        required:true
    },

},{timestamps:true});

module.exports=mongoose.model('BuyReq',buyerRequirementSchema);