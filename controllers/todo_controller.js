console.log("Connected to the controller JS");
var express = require("express");

var todosModel = require("../model/todo.js");

var router = express.Router();

router.get("/", function(req, res){
    todosModel.selectAll(function(data){
        console.log(data);

    });
});

router.post("/api/todo/:id", function(req, res){
    todosModel.insertOne(function(data){
        
    })
})