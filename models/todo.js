var orm = require("../config/orm.js");

var thisTodo = {
    selectAll: function(cb) {
        orm.selectAll("*", "todo_table", function(res){
            cb(res);
        });
    },
    insertOne: function(newTodo, cb) {
        orm.insertOne(newTodo, cb, function(res){
            cb(res);
        });
    },
    updateOne: function(updatedTodo, condition, cb){
        orm.updateOne(updatedTodo, condition, cb, function(res){
            cb(res);
        });   
    }
}

module.exports = thisTodo;