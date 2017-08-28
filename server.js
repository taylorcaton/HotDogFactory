var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var router = require('./controllers/hotdog_controllers.js');
var path = require('path');

var app = express();
var port = 3001;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(methodOverride("_method"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/static/", express.static(path.join(__dirname, "public")));
app.use('/', router);

// app.post("/", function(req, res) {
//   connection.query("INSERT INTO plans (plan) VALUES (?)", [req.body.plan], function(err, result) {
//     if (err) {
//       throw err;
//     }

//     res.redirect("/");
//   });
// });

// app.delete("/:id", function(req, res) {
//   connection.query("DELETE FROM plans WHERE id = ?", [req.params.id], function(err, result) {
//     if (err) {
//       throw err;
//     }

//     res.redirect("/");
//   });
// });

// app.put("/", function(req, res) {
//   connection.query("UPDATE plans SET plan = ? WHERE id = ?", [req.body.plan, req.body.id], function(err, result) {
//     if (err) {
//       throw err;
//     }

//     res.redirect("/");
//   });
// });

app.listen(port, function(){
  console.log("HotDogApp listening on PORT " + port);
});