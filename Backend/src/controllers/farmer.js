const Farmer=require('../models/farmer');
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

exports.farmerSignup=(req,res)=>{  


    Farmer.findOne({username:req.body.username},async function(err,user){
        if(err || user){
            return res.status(500).json({
                message:"Farmer Already Registered with Phone Number"
            });

        }
        else{
            const{
                firstName,
                lastName,
                email,
                username,
                password,
                address,
                city,
                district,
                postalCode,
                AadharNo
            }=req.body;
            const hash_password=await bcrypt.hash(password, 10) 
            const _user=new Farmer({
                firstName,
                lastName,
                email,
                username,
                role:'farmer',
                hash_password,
                Address:{address,city,district,postalCode},
                AadharNo
            });

            _user.save((error,data)=>{
                if(error){
                    console.log(error)
                    return res.status(500).json({
                        message:"Something Went Wrong"
                    });
                }

                if(data){
                    return res.status(200).json({
                        user:"User created Successfully"
                    });
                }

            })
        }
    })
}

exports.farmerSignin=(req,res)=>{
    Farmer.findOne({username:req.body.username},async (err,user)=>{
        if(err){
            console.log(err)
        }else{
            if(user){
                const isPassword = await user.authenticate(req.body.password);
                if(isPassword){
                    const token=jwt.sign({_id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'1d'});
                    const {firstName,lastName,email,role,fullName}=user;
                    res.status(200).json({
                        token,
                        user
                    });
                }else{
                    return res.status(500).json({
                        message:"Invalid Password"
                    })
                }
            }else{
                return res.status(500).json({message:"Something went wrong"})
            }
        }
    })
}

