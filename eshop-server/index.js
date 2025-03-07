// var express=require('express');
// var session=require('express-session');
// var bodyParser=require('body-parser');

// var productRoute=require('./routes/product.route.js')

// var app=express();//express app setup

// //To handle reqest body data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

// app.use("",productRoute);//To access product routes

// app.get("/",(req,res)=>{
//     res.send("Welcome...");
// })

// app.listen(4000,(req,res)=>{
//     console.log('Server started...')
// });

// // i
// // o

var express = require('express');

var session = require('express-session');

var bodyParser = require('body-parser');

var productRoute =require('./routes/product.route.js')

 

var app=express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use("",productRoute);

 

app.get("/",(req,res)=>{

    res.send("Welcome!!!!!!!!!!!!")

});

 

app.listen(4000,(req,res)=>{

    console.log("Server Started...................");

});
