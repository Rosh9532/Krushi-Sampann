const mongoose=require("mongoose");
const contractSchema=new mongoose.Schema({
	createdBy:{
       type:mongoose.Schema.Types.ObjectId,ref:'Farmer',
       required:true
    },
	
	productName:{
		type:String,
      required:true,
	trim:true 
	},
	idproof:[
		{img:{type:String}}
		
	],
	description:{
		type:String,
		
	},
	productionCapacity:{
		type:String
	},
	landArea:{
		type:String
	},
	
	seven_twelve_id:{
		type:String,
		required:true
	},
	
	ContractDuration:{
		startDate:{
			type:Date,
			required:true
		},
		EndDate:{
			type:Date,
			required:true
		}
	},
	locOfFarmer:{
		type:mongoose.Schema.Types.ObjectId,ref:'Farmer',
		required:true
	}
	
		
},{timestamps:true});

module.exports=mongoose.model('Contract',contractSchema);

