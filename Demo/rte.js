var express=require('express');
const r=express.Router();

r.get('/',(req,res)=>{
    res.send('ganesh')
})


r.get('/:id',(req,res)=>{
    res.send('ganesh'+req.params.id)
})

module.exports=r;