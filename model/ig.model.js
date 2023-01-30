const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const igSchema = mongoose.Schema({
   name:String,
   email : String,
   password : String,
   gender :String
});

igSchema.pre('save',function(next){
    if(!this.isModified('password')) return next();
    let hash = bcrypt.hashSync(this.password,8);
    this.password = hash;
    return next();
 })

const IgModel = mongoose.model('users',igSchema);

module.exports={
    IgModel
}