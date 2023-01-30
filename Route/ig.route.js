const express = require('express');
const { IgModel } = require('../model/ig.model');
const jwt = require("jsonwebtoken")

const userRoute = express.Router();

userRoute.get("/",async (req,res)=>{
    try {
const find =await IgModel.find();
     

        res.send("Welcome User   "+
           find);

    } catch (error) {
        console.log(error);
    }
})

userRoute.post("/register",async (req,res)=>{
    let payload = req.body;

try{
    const verify = await IgModel.find({email : payload.email})
    if(verify.length==0){
        const data =  new IgModel(payload);
        await data.save();
        res.send(data +   " Registered");
    }else{
        console.log("Already User Exist");
        res.send("Already USer Exist");
    }
    
} catch (error) {
    console.log(error);
    res.send("Try Regsiter Again");
} 
})

userRoute.post('/login' , async (req,res)=>{
    let {email,password} = req.body;
     try {
       let data= await IgModel.find({email:email,password:password});
       const token = jwt.sign({course : 'backend'}, 'masai');
  if(data.length>0){
    res.send('Login success' + token)
}else{
    res.send("email or password wrong");
    
  }


     } catch (error) {
        console.log(error);
        res.send("Check email or password");
     }
})

module.exports ={
    userRoute
}