var connection = require("./connection.js");

function orm() {}

orm.prototype.selectAll = function(cb) {
  connection.query("SELECT * FROM hotdogs;", function(err, data) {
    if (err) {
      return err;
    }
    // console.log("data from database:");
    // console.log(data);
    return cb(data);
  });
};

orm.prototype.insertOne = function(name, cb){
  connection.query("INSERT INTO hotdogs (hotdog_name) VALUES (?)", [name], function(err, data) {
    if(err){
      return err;
    }
    console.log(`Added ${name} to hotdogs`);
    cb(data);
  })
}

orm.prototype.updateOne = function(id, cb){
  connection.query("UPDATE hotdogs SET devoured = ? WHERE id = ?", [true, id], function(err, data) {
    if (err) {
      return err;
    }
    console.log(`Updated ID: ${id} to devoured`);
    cb(data);
  });
}

module.exports = orm;
