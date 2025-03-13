//Controller will connect the model
//To make CRUD operations
var EventsModel=require('../models/events.model.js')

exports.create=(req,res)=>{
    var event=new EventsModel({
        name:req.body.name,
        type:req.body.type,
        desc:req.body.desc,
    });
   //insert data into mongodb collection
   event.save()
    .then((result)=>
       res.send({"message":"Successfully saved","data":result})
    )
    .catch((err)=>res.send({"message":"Error","data":err}))
    //
}
exports.getAll=(req,res)=>{
    EventsModel.find()//select * from EventsModel
    .then(response=>res.send(response))
    .catch(err=>res.send(err));
}
exports.getById=(req,res)=>{
    var id=req.params.id;
    EventsModel.find({_id:id})
    .then(response=>res.send(response))
    .catch(err=>res.send(err));
}
exports.update=(req,res)=>{
    var id=req.params.id;
    var event={
        _id:id,
        name:req.body.name,
        type:req.body.type,
        desc:req.body.desc,
    };
   //updat data into mongodb collection
   EventsModel.findByIdAndUpdate(id,event)
    .then((result)=>
    res.send({"message":"Successfully updated","data":result})
    )
    .catch((err)=>res.send({"message":err,"data":null}))
    //
}
exports.delete=(req,res)=>{
    EventsModel.findByIdAndDelete(req.params.id)
    .then(response=>res.send({"message":"Successfully deleted","data":response}))
    .catch(error=>res.send({"message":error,"data":null}))
}
//PUT() id in the URL, body-data
//update- id
//body - data

//POST()   body-data

//DELETE() id in the URL, body-data