//Create the router for the app, and export the router at the end of your file.
var express = require("express");
var hotdog = require("../models/hotdog.js");

module.exports = (function() {
  var router = express.Router();

  router.get("/", function(req, res) {
    console.log("accessing data");
    hotdog("selectAllData", function(data){
      res.render("index", { hotdog: data });
    });
  });

  return router;
})();
