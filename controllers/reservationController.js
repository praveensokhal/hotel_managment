const Reservation = require('../models/reservationModel')
const SendResponse = require("../commonFunctions/Response")
module.exports =
{
   all:async(req,res)=>{
        
      try{
        let reservations = await Reservation.find().populate("customerId",["firstName","lastName"]).populate("roomId",["roomSample"]);
        if(reservations){
          return SendResponse(res,reservations,true,"Success")
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
                let ReservationDetails = new Reservation(req.body);
                ReservationDetails = await ReservationDetails.save()
                if(ReservationDetails){
                  return SendResponse(res,ReservationDetails,true,"Success")
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
         let ReservationDetails = await Reservation.findOneAndUpdate({_id:req.params.id},req.body)
          if(ReservationDetails){
            return SendResponse(res,ReservationDetails,false,"success")
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
          let ReservationDetails = await Reservation.findOneAndDelete({_id:req.params.id},req.body)
          if(ReservationDetails){
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

 

    
