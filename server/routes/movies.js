var express=require('express');

//how to enable express Routing?
var router=express.Router();

//HTTP method Verbs  - get(),post(),delete(),put(),patch()
//Creating http routes
//get()->Requesting data from server
router.get("/",(req,res)=>{
    res.send("Movies data...");
})
//post()->Sending data from client to server
router.post("/",(req,res)=>{
    res.send("{'id':'Sending movies data...'}");
})
//delete()->deleting data from server
router.delete("/",(req,res)=>{
    res.send("Deleting movies data...");
})
//put()->updating data into server
router.put("/",(req,res)=>{
    res.send("Updating movies data...");
})

module.exports=router;