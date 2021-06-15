const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
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
    price:{
     type:Number
    },
    district:{
      type:String
    },
    unit:{
      type:String,
      
    },
    quantity:{
      type:Number,
      required:true
    },
    description:{
      type:String,
      required:true,
      trim:true
    },
    
    productPicture:[
        {img:{type:String}}
    ],
    reviews:[
        {
            userId:{type:mongoose.Schema.Types.ObjectId,ref:'Buyer'},
            review:String
        }
    ],
    category:{type:mongoose.Schema.Types.ObjectId,ref:'Category',required:true},
    createdBy:{
       type:mongoose.Schema.Types.ObjectId,ref:'Farmer',
       required:true
    },
    upDatedAt:Date
},{timestamps:true});

module.exports=mongoose.model('Product',productSchema);