//importing express library to create express server
var express=require('express');
var movieRoute=require('./routes/movies.js')
//Enable express server function
var app=express();

//use() -> express middleware function to control the app
app.use("/movies",movieRoute);
//How to request/access express app-> GET, Post, Delete, Put
app.get("/",function(req,res){
    res.send("welcome");
});
app.get("/ganesh",function(req,res){
    res.send("welcome,Ganesh");
});

//How to set express application port number to run
app.listen(4000);
console.log('Server started...');

//http://localhost:4000/
