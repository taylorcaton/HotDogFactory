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

// orm.prototype.function insertOne(){

// }

// orm.prototype.function updateOne(){

// }

module.exports = orm;
