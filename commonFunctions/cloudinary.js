const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');


cloudinary.config({
    cloud_name: 'dxch6whmq',
    api_key: '982869323987896',
    api_secret: 'MERuDotMr31sO25hvFKO8re7Dec'
  });
const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ['png','jpeg'],
  filename: function (req, file, cb) {
      console.log("fileeeee",file,1)
      cb(null,Date.now()+"--"+file.originalname);
  }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;