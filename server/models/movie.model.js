//To connect mongodb or create mongodb schema collection
const mongoose=require('mongoose');

//How to create mongodb schema/collection
//mongoose.Schema is class
var movieSchema=new mongoose.Schema({
    name:String,
    type:String,
    desc:String
})

//how to collection name
var moviemodel=mongoose.model("Movie",movieSchema);
//exporting collection
module.exports=moviemodel;