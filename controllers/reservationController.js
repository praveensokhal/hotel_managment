const Reservation = require('../models/reservationModel')
const SendResponse = require("../commonFunctions/Response");
const roomInfoModel = require('../models/roomInfoModel');
const e = require('cors');
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
    view:async(req,res)=>{
        
      try{
       if(req.params.id){
        let reservations = await Reservation.findById({"_id":req.params.id}).populate("customerId",["firstName","lastName"]).populate("roomId",["roomSample"]);
        if(reservations){
          return SendResponse(res,reservations,true,"Success")
        }else{
          return SendResponse(res,null,false,"Data not Found")
        }
       }else{
        return SendResponse(res,null,false,"Id parameter is missing")
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
          let reservationsuccess = true;
            if(req.body){
              let message = "";
                let ReservationDetails = new Reservation(req.body);
                let AlreadyReserevedRoom = await roomInfoModel.findOne({_id:ReservationDetails.roomId}); //room occuipied date enter
               if(AlreadyReserevedRoom){
               let roomResevationsDate=  AlreadyReserevedRoom.roomResevationsDate;
               AlreadyReserevedRoom =  roomResevationsDate.forEach(AlreadyReserevedDateList => {
                                var reservedDate = new Date(req.body.checkIn);
                                var AlreadyReserevedRoomDate = new Date(AlreadyReserevedDateList.roomOccupiedStartDate);
                                var minDate = new Date(AlreadyReserevedDateList.roomOccupiedStartDate);
                                var maxDate =  new Date(AlreadyReserevedDateList.roomOccupiedEndDate);    
                                // wheather the room is booked for the date or not
                                if(reservedDate.getTime() === AlreadyReserevedRoomDate.getTime()){
                                  reservationsuccess = false;
                                 message="The Room is already Reserved for the date";
                                }
                                //room booked  in between the checkIN date
                                if (reservedDate.getTime() > minDate.getTime() && reservedDate.getTime() <= maxDate.getTime() ){
                                  reservationsuccess = false;
                                  message="The Room is already Reserved  for the date In bettwen the Range";
                                }
                });
               }
               console.log(reservationsuccess)
                  if(reservationsuccess === true){
                    ReservationDetails = await ReservationDetails.save();
                    let room = await roomInfoModel.findOneAndUpdate(
                      {_id:req.body.roomId},
                      {$push:{roomResevationsDate:{
                        roomOccupiedStartDate:req.body.checkIn,
                        roomOccupiedEndDate:req.body.checkOut
                      }}},{new:true});
                
                  if(ReservationDetails && room){
                    
                    return SendResponse(res,ReservationDetails,true,"Success")
                  }
                  }else{
                    return SendResponse(res,null,false,message||"Ooops data not found")
                  }
            }else{
              return SendResponse(res,null,false,"Internal Server Issue")
            }
        }catch(error){
          console.log(error);
          return res.status(500).send({
            ResponseMessage:error.message||"Internal server Error",
            responseCode:500
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

 

    
