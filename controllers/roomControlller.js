var roomClass = require('../models/roomModel')
var SendResponse = require("../commonFunctions/Response")
module.exports =
{
   all:async(req,res)=>{
        
      try{
        let rooms = await roomClass.find();
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
            if(req.body.room && req.body.price){
                let roomClassDetails = new roomClass(req.body);
                roomClassDetails = await roomClassDetails.save()
                if(roomClassDetails){
                  return SendResponse(res,roomClassDetails,true,"Success")
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
          let roomClassDetails = await roomClass.findOneAndUpdate({_id:req.params.id},req.body)
          roomClassDetails = await roomClassDetails.save()
          if(roomClassDetails){
            return SendResponse(res,roomClassDetails,false,"success")
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
          let roomClassDetails = await roomClass.findOneAndDelete({_id:req.params.id},req.body)
          if(roomClassDetails){
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

 

    
