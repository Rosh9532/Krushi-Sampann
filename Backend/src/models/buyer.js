const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const buyerSchema=new mongoose.Schema({
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
        enum:['buyer'],
        default:'buyer'

    },
    username:{
        type:Number,
        unique:true,
    },

},{timestamps:true});



buyerSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`;
});

buyerSchema.methods={
    authenticate:async function(password){
        return await bcrypt.compareSync(password,this.hash_password);
    }
}

module.exports=mongoose.model('Buyer',buyerSchema);