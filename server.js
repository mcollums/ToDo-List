var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// app.set('views', path.join(__dirname, '..', 'views'));

// app.engine("handlebars", exphbs({ defaultLayout: "main",
// layoutsDir: path.join(__dirname, '..', 'views', 'layouts'),
// partialsDir: path.join(__dirname, '..', 'views', 'partials')}
// ));

// Import routes and give the server access to them.
var routes = require("./controllers/todo_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
