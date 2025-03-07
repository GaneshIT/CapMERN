//Controller will connect the model
//To make CRUD operations
const UserModel=require('../models/user.js')


exports.login=(req,res)=>{
    const u=new UserModel({
        email:req.body.email,
        pwd:req.body.pwd
    });
   //insert data into mongodb collection
   UserModel.find({email:u.email,pwd:u.pwd})
    .then((result)=>{
        req.session.email =u.email;
        res.send("Success");
    },
    (err)=>res.send("user and pwd wrng..")
    )
    .catch((err)=>console.log("err",err))
    //
}
getAll=()=>{
    //
}