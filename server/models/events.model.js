//To connect mongodb or create mongodb schema collection
const mongoose=require('mongoose');

//How to create mongodb schema/collection
//mongoose.Schema is class
var eventSchema=new mongoose.Schema({
    name:String,
    type:String,
    desc:String
})

//how to collection name
var eventmodel=mongoose.model("Events",eventSchema);
//exporting collection
module.exports=eventmodel;