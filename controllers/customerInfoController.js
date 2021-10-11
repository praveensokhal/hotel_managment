const customerInfo = require('../models/customerInfoModel')
const SendResponse = require("../commonFunctions/Response")
module.exports =
{
   all:async(req,res)=>{
        
      try{
        let customer = await customerInfo.find();
        if(customer){
          return SendResponse(res,customer,true,"Success")
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
                let customerInfoDetails = new customerInfo(req.body);
                customerInfoDetails = await customerInfoDetails.save()
                if(customerInfoDetails){
                  return SendResponse(res,customerInfoDetails,true,"Success")
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
         let customerInfoDetails = await customerInfo.findOneAndUpdate({_id:req.params.id},req.body)
          if(customerInfoDetails){
            return SendResponse(res,customerInfoDetails,false,"success")
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
          let customerInfoDetails = await customerInfo.findOneAndDelete({_id:req.params.id},req.body)
          if(customerInfoDetails){
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

 

    
