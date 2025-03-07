const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
const token = req.header('Authorization');//encoded token
if (!token) return res.status(401).json({ error: 'Access denied' });
try {
 const decoded = jwt.verify(token, 'your-secret-key');
 req.userId = decoded.userId;//admin
 next();
 } catch (error) {
 res.status(401).json({ error: 'Invalid token' });
 }
 };

module.exports = verifyToken;









//localhost:3000/ProtectedRoute

// function(req,res){
//     if(req.header.authorization!="")
//         next();
//     else
//         res.send("401")
// }
// function(req,res){
//     res.send("Welcome")
// }
// function(req,res,next){  //next middleware operation
//     if(req.body.username=="")
//         res.send("username cannot be empty")
//     else
//         next();// it will go next function
// }
// function(req,res,next){  //next middleware operation
//     if(req.body.username=="")
//         res.send("username cannot be empty")
//     else
//         next();// it will go next function
// }
