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
       console.log("Saved......")
    )
    .catch((err)=>console.log("err",err))
    //
}
getAll=()=>{
    //
}