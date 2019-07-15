//requiring the mysql npm
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
//credentials for the connection to the local mysql database
    var connection = mysql.createConnection({
        host: "lgg2gx1ha7yp2w0k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "f8fbdvlafn5eibbe",
        password: "b9m084knd02wnp58",
        database: "ey0m09tlhzp9m2fr"
    });
}
//creating connection to the local db
connection.connect(function(err){
    if(err){
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
});

//exporting the connection
module.exports = connection;