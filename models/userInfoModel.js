const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userInfo = Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email: { type: String, required: true },
    contactNo:{type:Number},
    address:{type:String},
    adhaarNo:{type:Number,required:true},
    roleType:{type:Number,default:1},
    designation:{type:String}

},{ timestamps: true });

module.exports = mongoose.model("user_informations",userInfo)