const mongoose = require("mongoose")
const Schema = mongoose.Schema;

let roomClass = new Schema(
    {
        room:{type:String,required:true},
        price:{type:Number,required:true}
    }
)
module.exports = mongoose.model('roomclasses', roomClass);