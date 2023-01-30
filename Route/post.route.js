const express = require('express');
const {PostModel} = require('../model/post.model');

const post = express.Router();

post.get('/',async (req,res)=>{
    try {
        const find =await PostModel.find();
             
        
                res.send("Welcome User   "+
                   find);
        
            } catch (error) {
                console.log(error);
            }
})

post.post("/create",async (req,res)=>{
     const payload = req.body;
      try {
        const data = new PostModel(payload);
           await data.save();
           res.send("Created success " +  data);
      } catch (error) {
        console.log(error);
        res.send("Something went Wrong");
      }

})


post.patch("/update/:id",async (req,res)=>{
    const id = req.params.id;
    const payload = req.body;

     try {
       await PostModel.findByIdAndUpdate({_id:id},payload);
          res.send("Updated success " );
     } catch (error) {
       console.log(error);
       res.send("Something went Wrong");
     }

})

post.delete("/delete/:id",async (req,res)=>{
    const id = req.params.id;
     try {
       await PostModel.findByIdAndDelete({_id:id});
          res.send("Deleted success ");
     } catch (error) {
       console.log(error);
       res.send("Something went Wrong");
     }

})


module.exports = {
    post
}