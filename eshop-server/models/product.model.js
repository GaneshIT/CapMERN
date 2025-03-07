var mongoose=require('mongoose');
var productschema=new mongoose.Schema({
    name:String,
    brand:String,
    desc:String,
    price:Number,
})
var productmodel=mongoose.model("Product",productschema);

module.exports=productmodel;
