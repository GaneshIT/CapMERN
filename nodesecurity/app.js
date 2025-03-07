const express = require('express');
const mongoose=require('mongoose');
const app = express();
const authRoutes = require('./routes/auth');
const protectedRoute = require('./routes/protectedRoute');
const db=require('./config/db.config.js');
app.use(express.json());

 mongoose.connect(db.url,{
     useNewUrlParser: true,
     useUnifiedTopology: true
     })
     .then((result)=>console.log("Connected"))
     .catch((err)=>console.log("Not Connected",err))
    
 app.use('/auth', authRoutes);
 app.use('/protected', protectedRoute);
 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
 });