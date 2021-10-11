const mongoose = require("mongoose")
const Schema = mongoose.Schema;

 let roomInfo = Schema({
     roomType:{type:mongoose.Schema.Types.ObjectId,ref:"roomclasses",required:true},
     roomSample:{type:String,required:true},
     description:{type:String}
 })

 module.exports = mongoose.model("room_informations",roomInfo)