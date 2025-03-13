var express=require('express');
var events=require('../controller/events.controller.js')
//how to enable express Routing?
var router=express.Router();

//HTTP method Verbs  - get(),post(),delete(),put(),patch()
//Creating http routes
//get()->Requesting data from server
router.get("/:id",events.getById)
router.get("/",events.getAll)
//post()->Sending data from client to server
router.post("/",events.create)
//delete()->deleting data from server
router.delete("/:id",events.delete)
//put()->updating data into server
router.put("/:id",events.update)

module.exports=router;