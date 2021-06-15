const Contract=require('../models/contract');

exports.createContract=(req,res)=>{
    const {productName,description,productionCapacity,landArea,address,city,district,postalCode,seven_twelve_id,startDate,EndDate}=req.body
    if(req.files.length>0){
        idproof=req.files.map(file=>{
            return{img:file.filename}
        })
      }
    

    const contract=new Contract({
        createdBy:req.user._id,        
        productName,
        idproof,
        description,
        productionCapacity,
        landArea,
        location:{address,city,district,postalCode},
        seven_twelve_id,
        ContractDuration:{startDate,EndDate},
        locOfFarmer:req.user._id,  

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


exports.getContracts=(req,res)=>{
    Contract.find({})
    .populate("createdBy",'firstName lastName location')
    .populate("locOfFarmer",'Address')
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