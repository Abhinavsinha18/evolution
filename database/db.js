const mongoose = require('mongoose');

const connect = mongoose.connect('mongodb+srv://abhinav:abhinav@cluster0.jxq2tkf.mongodb.net/ig?retryWrites=true&w=majority');



module.exports = {
    connect
}