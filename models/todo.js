var orm = require("../config/orm.js");

var todosModel = {
    selectAll: function(cb) {
        orm.selectAll("todo_table", function(res){
            cb(res);
        });
    },
    insertOne: function(newTodo, cb) {
        console.log("Model newTodo " + newTodo);
        orm.insertOne(newTodo, function(res){
            cb(res);
        });
    },
    updateOne: function(updatedTodo, col, value, cb){
        orm.updateOne(updatedTodo, col, value, cb, function(res){
            cb(res);
        });   
    }
}

module.exports = todosModel;