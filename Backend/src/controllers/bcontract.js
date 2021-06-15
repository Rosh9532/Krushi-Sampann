const Bcontract=require('../models/bcontract');

exports.bcreateContract=(req,res)=>{
    const {productName,description,firmname,regId,reqQuantity,address,city,district,postalCode,startDate,EndDate}=req.body
    if(req.files.length>0){
        idproof=req.files.map(file=>{
            return{img:file.filename}
        })
      }
    

    const contract=new Bcontract({
        createdBy:req.user._id,       
        productName,
        idproof,
        description,
        firmname,
        regId,
        reqQuantity,
        location:{address,city,district,postalCode},
        ContractDuration:{startDate,EndDate}

    });
    contract.save((err,data)=>{
        if(err){
            console.log(err)
            return res.status(500).json({
                message:"Something Went Wrong"
            });
        }
        if(data){
            return res.status(200).json({
                data
            });
        }
    })
}


exports.getbContracts=(req,res)=>{
    
                     
    Bcontract.find({})    
    .populate("createdBy",'firstName lastName')
       
    .exec((err,contracts)=>{
        if(err){
            return res.status(500).json({
                message:"Something Went Wrong"
            });
        }
        if(contracts){
            return res.status(200).json({
                contracts
            })
        }
    })
}