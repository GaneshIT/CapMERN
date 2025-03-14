var express=require('express');
var mve=require('../controller/events.controller.js')
//how to enable express Routing?
var router=express.Router();

//HTTP method Verbs  - get(),post(),delete(),put(),patch()
//Creating http routes
//get()->Requesting data from server
router.get("/:id",mve.getById)
router.get("/",mve.getAll)
//post()->Sending data from client to server
router.post("/",mve.create)
//delete()->deleting data from server
router.delete("/:id",mve.delete)
//put()->updating data into server
router.put("/:id",mve.update)

module.exports=router;