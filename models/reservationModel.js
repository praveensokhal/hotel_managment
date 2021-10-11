const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reservation = Schema({
    customerId:{type:mongoose.Schema.Types.ObjectId,ref:"customer_informations",required:true},
    roomId:{type:mongoose.Schema.Types.ObjectId,ref:"room_informations",required:true},
    reservationDate:{type:Date,default:Date.now,required:true},
    checkIn:{type:Date,required:true},
    checkOut:{type:Date},
    noOfDays:{type:Number,required:true}
    
},{ timestamps: true });

module.exports = mongoose.model("reservations",Reservation);