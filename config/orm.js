var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        //this function will select all the needed columns from the todos table
        // SELECT * FROM ??
        var queryString = "SELECT * FROM ?? ;";
        connection.query(queryString, tableInput, function(err, res){
            if (err) {throw err};
            console.log(res);
            //pass data back to the caller
            cb(res);
        });
    },
    insertOne: function(newTodo, cb) {
        // this function will select one of the columns from the todo table
        // INSERT INTO ?? WHERE ?? = ??
        console.log("ORM newTodo " + newTodo);
        var queryString = "INSERT INTO todo_table (item) VALUES (?) ";
        connection.query(queryString, [newTodo], function(err, res){
            if(err) {throw err};
            console.log(res);
            //pass data back to the caller
            cb(res);
        })
    },
    updateOne: function(updatedTodo , col,  value, cb) {
        // this function will select one of the columns to update
        // UPDATE SET WHERE ?? 
        var queryString = "UPDATE todo_table "; 
            queryString += "SET ? WHERE ?? = ?"
        
        console.log(queryString);

        var query = connection.query(queryString, [updatedTodo, col, value], function(err,res){
            if(err) {throw err};
            //send information back to caller
            cb(res);
        })
        console.log(query.sql);
    }
};

module.exports = orm;