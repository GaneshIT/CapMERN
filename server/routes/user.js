var express=require('express');
var usr=require('../controller/user.controller.js')
//how to enable express Routing?
var router=express.Router();


//post()->Sending data from client to server
router.post("/login",usr.login)
//delete()->deleting data from server


module.exports=router;