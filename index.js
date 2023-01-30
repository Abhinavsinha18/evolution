const express = require('express');
const { connect } = require('./database/db');
// require('dotenv');\
const {userRoute} = require('./Route/ig.route');
const {post} = require('./Route/post.route')
const cors = require('cors');
const { authenticate } = require('./Middleware/middle');

const app = express();

app.use(express.json());
app.get('/', (req,res)=>{
    res.send("welcome user");
})
app.use(cors())
app.use("/user", userRoute);
app.use(authenticate);
app.use("/post",post)

let PORT =  4000   //process.env.PORT;

app.listen(PORT,async ()=>{
    try {
        await connect;
        console.log("Connected to database " + PORT);
    } catch (error) {
        console.log(error);
    }
   console.log("Listening");
})

