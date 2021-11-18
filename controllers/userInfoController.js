const userInfo = require('../models/userInfoModel')
const SendResponse = require("../commonFunctions/Response");
const roomInfo= require('../models/roomInfoModel');
module.exports =
{
   all:async(req,res)=>{
        
      try{
        let user = await userInfo.find();
        if(user){
          return SendResponse(res,user,true,"Success")
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
    reservationDetails:async(req,res)=>{
        
      try{
        let user = await userInfo.find().sort({createdAt:-1});
        let rooms = await roomInfo.find().populate("roomType");
        if(user&&rooms){
          return SendResponse(res,{user:user,room:rooms},true,"Success")
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
          // console.log(req.body)
            if(req.body){
                let userInfoDetails = new userInfo(req.body);
                userInfoDetails = await userInfoDetails.save()
                if(userInfoDetails){
                  return SendResponse(res,userInfoDetails,true,"Success")
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
    employeeCreate: async (req,res)=>{
      try{
          if(req.body){
              let userInfoDetails = new userInfo(req.body);
              userInfoDetails = await userInfoDetails.save()
              if(userInfoDetails){
                return SendResponse(res,userInfoDetails,true,"Success")
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
         let userInfoDetails = await userInfo.findOneAndUpdate({_id:req.params.id},req.body)
          if(userInfoDetails){
            return SendResponse(res,userInfoDetails,false,"success")
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
          let userInfoDetails = await userInfo.findOneAndDelete({_id:req.params.id},req.body)
          if(userInfoDetails){
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

 

    
