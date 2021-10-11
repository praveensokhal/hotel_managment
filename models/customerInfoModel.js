const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let customerInfo = Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email: { type: String, required: true },
    contactNo:{type:Number,required:true},
    address:{type:String,required:true},
    adhaarNo:{type:Number,required:true}

});

module.exports = mongoose.model("customer_informations",customerInfo)