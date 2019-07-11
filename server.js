//Requiring express for the server
var express = require('express');

//Setting the port for server
var PORT = process.env.PORT || 3030;

var app = express();

//Server static content from the public folder 
app.use(express.static("public"));

//Parsing request body as a JSON object
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

//Telling server to require the handlebars application
var exphbs = require('express-handlebars');

//Telling express to use the npm express-handlebars in a default layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//Telling express that we want to use handlebars to populate the html view
app.set("view engine" , "handlebars");

//Importing routes in order to give the server access to them
var routes = require("./controllers/todo_controller.js");

//requires a middlewear function
// app.use(routes);

//Asking the server to listen for any changes on the PORT we specified above
app.listen(PORT, function(){
    console.log("App is now listening at localhost: " + PORT);
});