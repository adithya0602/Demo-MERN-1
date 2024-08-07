const User = require('../models/user-model');
const bcrypt = require('bcryptjs');

const home = async(req,res) =>{
 try {
    res.status(200).send("worlds best route you are going....");
 } catch (error) {
    console.log(error);
 }
}

const register = async(req,res)=>{
    try {
        const {username , email , phone , password} = req.body;
        const userExist = await User.findOne({email:email});
        if (userExist){
            return res.status(400).json({msg:'email already exist'});
        }
        //const saltRound=10;
        //const hash_password = await bcrypt.hash(password,saltRound)
        const userCreated = await User.create({username , email , phone , password})
        res.status(201).json({msg:"registration successfull",
            token:await userCreated.generateToken(),
            userId : userCreated._id.toString()
        });
    } catch (error) {
        res.status(400).send({msg:'internal server error'});
    }
}

const login = async(req,res) =>{
    try {
       const {email , password} = req.body;
       const userExist = await User.findOne({email});
       console.log(userExist);
       if(!userExist){
        return res.status(400).json({message:"Invalid Credentials"});
       }
       const user = await userExist.comparePassword(password);
       if (user){
        res.status(201).json({msg:"login successful",
            token:await userExist.generateToken(),
            userId : userExist._id.toString()
        });
       }
       else{
        res.status(401).json({message:"Invalid Email or Password"})
       }
    } catch (error) {
       next(error)
    }
   }

module.exports = {home,register,login};