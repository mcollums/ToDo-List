//requiring the mysql npm
var mysql = require("mysql");

//credentials for the connection to the local mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "@Torpedoes1",
    database: "todo_db"
});

//creating connection to the local db
connection.connect(function(err){
    iff(err){
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
});

//exporting the connection
module.exports = connection;