var express=require('express');
var product=require('../controllers/product.controller.js')

var router=express.Router();

router.post("/product",product.create);

router.get("/product",product.getAll);

router.get("/product/:brand",product.getByBrand);

router.put("/product/:id",product.update);

router.delete("/product/:id",product.delete);

module.exports=router;