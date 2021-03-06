console.log("Connected to the controller JS");

var express = require("express");

var router = express.Router();

var todosModel = require("../models/todo.js");


router.get("/", function(req, res){
    todosModel.selectAll(function(data){
        // console.log(data);
        var hbsObj = {todo:data};
        res.render("../views/index", hbsObj);
    });
});

router.post("/api/todo", function(req, res){
    console.log(req.body.todo);
    todosModel.insertOne(req.body.todo, function(data){
        res.json(data);
    });
});

router.put("/api/todo/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("PUT condition:" + condition);
    console.log("Req.body.done condition:" + req.body.done);

  
    todosModel.updateOne(
      {
        done: Boolean(req.body.done)
      },
      "id", +req.params.id,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });

module.exports = router;
