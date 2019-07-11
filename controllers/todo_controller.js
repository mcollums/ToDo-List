console.log("Connected to the controller JS");

var express = require("express");

var router = express.Router();

var todosModel = require("../models/todo.js");


router.get("/", function(req, res){
    todosModel.selectAll(function(data){
        console.log(data);
        var hbsObj = {todo:data};
        res.render("index", hbsObj);
    });
});

router.post("/api/todo/:id", function(req, res){
    todosModel.insertOne(function(data){
        
    })
})

module.exports = router;