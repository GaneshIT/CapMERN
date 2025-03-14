//Controller will connect the model
//To make CRUD operations
var MovieModel=require('../models/movie.model.js')

exports.create=(req,res)=>{
    var movie=new MovieModel({
        name:req.body.name,
        type:req.body.type,
        desc:req.body.desc,
    });
   //insert data into mongodb collection
    movie.save()
    .then((result)=>
       res.send({"message":"Successfully saved","data":result})
    )
    .catch((err)=>res.send({"message":"Error","data":err}))
    //
}
exports.getAll=(req,res)=>{
    MovieModel.find()//select * from moviemodel
    .then(response=>res.send(response))
    .catch(err=>res.send(err));
}
exports.getById=(req,res)=>{
    var id=req.params.id;
    MovieModel.find({_id:id})
    .then(response=>res.send(response))
    .catch(err=>res.send(err));
}
exports.update=(req,res)=>{
    var id=req.params.id;
    var movie={
        _id:id,
        name:req.body.name,
        type:req.body.type,
        desc:req.body.desc,
    };
   //updat data into mongodb collection
   MovieModel.findByIdAndUpdate(id,movie)
    .then((result)=>
    res.send({"message":"Successfully updated","data":result})
    )
    .catch((err)=>res.send({"message":err,"data":null}))
    //
}
exports.delete=(req,res)=>{
    MovieModel.findByIdAndDelete(req.params.id)
    .then(response=>res.send({"message":"Successfully deleted","data":response}))
    .catch(error=>res.send({"message":error,"data":null}))
}
//PUT() id in the URL, body-data
//update- id
//body - data

//POST()   body-data

//DELETE() id in the URL, body-data