const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Payment = Schema({
    customerId:{type:mongoose.Schema.Types.ObjectId,ref:"customer_informations",required:true},
    paymentDate:{type:Date,default:Date.now,required:true},
    paymentType :{type:String,required:true},
    paymentAmount:{type:Number,required:true}
    
    
},{ timestamps: true });

module.exports = mongoose.model("paymnets",Payment);