const multer = require('multer');
const path = require('path');
const express = require('express');
const router = express.Router();
const upload = multer({
    storage: multer.diskStorage({
        destination: './public/uploads/',
        filename: function(req, file, cb){
          cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
      })
}).single('myImage');
router.post('/', async (req, res) => {
    upload(req, res, (err) => {
        if(err){
            res.send( { msg: err });
        } else {
            if(req.file == undefined){
                res.send({ msg: "Error: No File Selected!" });
            } else {
                var temp = {
                    msg: 'File Uploaded!',
                    file: `uploads/${req.file.filename}`
                };
                res.send(temp);
            }
        }
      });
});

module.exports = router;