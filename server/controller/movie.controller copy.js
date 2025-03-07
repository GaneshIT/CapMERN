var MovieModel=require('../models/movie.model.js')

exports.create=(req,res)=>{
    var m=new MovieModel({
        name:"a",
        type:"b",
        desc:"c"
    });
  m.save()
  .then((r)=>res.send({
    message:"User created successfully!!",
    user:r
}))
  .catch((e)=>console.log(e))
}