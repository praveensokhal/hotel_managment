const mongoose = require("mongoose")
const Schema = mongoose.Schema;

 let roomInfo = Schema({
     roomType:{type:mongoose.Schema.Types.ObjectId,ref:"roomclasses",required:true},
     roomSample:{type:String,required:true},
     description:{type:String},
    //  roomOccupiedStartDate:{type:Date},
    //  roomOccupiedEndDate:{type:Date},
     roomResevationsDate: [
      { 
          roomOccupiedStartDate: { type:Date},
          roomOccupiedEndDate:{type:Date}
      }
    ],
     roomVacant:{type:Number,default:1}

 })

 module.exports = mongoose.model("room_informations",roomInfo)