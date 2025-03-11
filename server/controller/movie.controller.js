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