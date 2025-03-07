const express = require('express');
 const router = express.Router();
 const verifyToken = require('../middleware/authMiddleware');
// Protected route
 router.get('/', verifyToken, (req, res) => {
 res.status(200).json({ message: 'Protected route accessed' });
 });
//verifyToken -- 200->next() or 401->res.send() status
module.exports = router;