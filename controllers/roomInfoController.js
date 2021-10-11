const roomInfo = require('../models/roomInfoModel')
const SendResponse = require("../commonFunctions/Response")
module.exports =
{
   all:async(req,res)=>{
        
      try{
        let rooms = await roomInfo.find().populate("roomType");
        if(rooms){
          return SendResponse(res,rooms,true,"Success")
        }else{
          return SendResponse(res,null,false,"Data not Found")
        }
      }
      catch(error){
        console.log(error);
        return res.send({
          ResponseMessage:error.message||"Internal server Error",
          responseCode:500
        })
  
      }
    },
    create: async (req,res)=>{
        try{
          console.log(req.body)
            if(req.body.roomType && req.body.roomSample){
                let roomInfoDetails = new roomInfo(req.body);
                roomInfoDetails = await roomInfoDetails.save()
                if(roomInfoDetails){
                  return SendResponse(res,roomInfoDetails,true,"Success")
                }else{
                  return SendResponse(res,null,false,"Ooops data not found")
                }
            }else{
              return SendResponse(res,null,false,"Internal Server Issue")
            }
        }catch(error){
            return res.send({
              ResponseMessage:error.message||"Internal server Error",
              responseCode:0
            })
        }
    },
    update: async (req,res)=>{
      try{
        if(!req.params.id){
          return SendResponse(res,null,false,"Id missing")
        }
        if(req.params.id){
         let roomInfoDetails = await roomInfo.findOneAndUpdate({_id:req.params.id},req.body)
          if(roomInfoDetails){
            return SendResponse(res,roomInfoDetails,false,"success")
          }else{
            return SendResponse(res,null,false,"data not saved")
          }
        }

      }catch(error){
        return res.send({
          ResponseMessage:error.message||"Internal server Error",
          responseCode:0
        })
      }
    },
    delete: async (req,res)=>{
      try{
     
        if(!req.params.id){
          return SendResponse(res,null,false,"Id missing")
        }
        if(req.params.id){
          let roomInfoDetails = await roomInfo.findOneAndDelete({_id:req.params.id},req.body)
          if(roomInfoDetails){
            return SendResponse(res,false,"Item Deleted")
          }else{
            return SendResponse(res,null,false,"data not Found")
          }
        }

      }catch(error){
        return res.send({
          ResponseMessage:error.message||"Internal server Error",
          responseCode:0
        })
      }
    }
}

 

    
