var m=require('mongoose');

var us=new m.Schema({
    name:String,
    email:String,
    pwd:String
})

var um=m.model("User",us);

module.exports=um;