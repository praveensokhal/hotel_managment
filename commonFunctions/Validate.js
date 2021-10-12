const Joi = require('joi'); 
const middleware = (schema, property) => { 
  return (req, res, next) => { 
  const { error } = schema.validate(req.body); 
  const valid = error == null; 
  
  if (valid) { 
    next(); 
  } else { 
    const { details } = error; 
    const message = details.map(i => i.message).join(',');
 
    console.log("error", message); 
   res.status(200).json({ ResponseMessage: message }) } 
  } 
} 
module.exports = middleware;