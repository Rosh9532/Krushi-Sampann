const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const farmerSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        min:2,
        max:20
    },

    lastName:{
        type:String,
        required:true,
        trim:true, 
        min:3,
        max:20       
        
        
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    hash_password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['farmer'],
        default:'farmer'

    },
    username:{
        type:Number,
        unique:true,
    },
    Address: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        postalCode: {
            type: Number,
            required: true
        }
    },
    AadharNo:{
        type:Number,
        required:true
    }
    
    
    

},{timestamps:true});

farmerSchema.virtual('password')
.set(function(password){
    
    this.hash_password=bcrypt.hashSync(password, 10)
    
});

farmerSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`;
});

farmerSchema.methods={
    authenticate:async function(password){
        return await bcrypt.compareSync(password,this.hash_password);
    }
}

module.exports=mongoose.model('Farmer',farmerSchema);