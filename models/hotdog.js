var orm = require("../config/orm.js");

var ormOBJ = new orm();

module.exports = function dataAccess(call, id, cb) {
  switch (call) {
    case "selectAllData":
      console.log("Select All Data Called");
      ormOBJ.selectAll(function(stuff) {
        return cb(stuff);
      });
      break;

    case "updateData":
      console.log(`updateOne Called for ID: ${id}`);
      ormOBJ.updateOne(id, function(stuff){
        return cb(stuff);
      });
      break;
    
      case "addData":
      console.log(`insertOne Called for name: ${id}`);
      ormOBJ.insertOne(id, function(stuff){
        return cb(stuff);
      });
      break;

    default:
      break;
  }
};
