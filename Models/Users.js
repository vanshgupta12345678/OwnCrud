const mongoose=require("mongoose");
const { type } = require("os");
const UserSchema=new mongoose.Schema({
    Fname:{type:String},
    Lname:{type:String},
    Email:{type:String},
    Password:{type:String}
})
module.exports=mongoose.model("User",UserSchema);