module.exports = (res,data,message,ResponseMessage)=>{
    const response = {
        ResponseCode: 200,
        ResponseMessage,
        message,
        data,
      };
      
      res.status(200).json(response);
}