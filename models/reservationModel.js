const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reservation = Schema({
    customerId:{type:mongoose.Schema.Types.ObjectId,ref:"customer_informations"},
    roomId:{type:mongoose.Schema.Types.ObjectId,ref:"room_informations"},
    reservationDate:{type:Date,default:Date.now},
    checkIn:{type:Date},
    checkOut:{type:Date},
    noOfDays:{type:Number}
    
},{ timestamps: true });

module.exports = mongoose.model("reservations",Reservation);