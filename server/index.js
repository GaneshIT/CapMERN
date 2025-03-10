//importing express library to create express server
var express=require('express');
var mongoose=require('mongoose');
const session = require('express-session');
var movieRoute=require('./routes/movies.js')
var usrR=require('./routes/user.js')
var db=require('./db/db.config.js');
//Enable express server function
var app=express();

app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true
}));
//Check mongodb connection
mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then((result)=>console.log("Connected"))
    .catch((err)=>console.log("Not Connected",err))
//To access the request body json data
app.use(express.json());
//To access body and url params
app.use(express.urlencoded({ extended: true }));
//use() -> express middleware function to control the app
//http://localhost:4000/movies
const requireAuth = (req, res, next) => {
    if (req.session.email) {
        next(); // User is authenticated, continue to next middleware
    } else {
        res.send('UnAuth'); // User is not authenticated, redirect to login page
    }
}
app.use("/movies",requireAuth,movieRoute);
app.use('/',usrR);
//http://localhost:4000/ganesh
app.get("/profile/:name/:id",(req,res)=>{
    res.send(req.params.name+","+req.params.id);
})
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

//http://localhost:4000/movies/123


//http://localhost:4000/movies