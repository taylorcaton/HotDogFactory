var orm = require('../config/orm.js');

var ormOBJ = new orm();

module.exports = function dataAccess(call, cb){

    switch (call) {
        case "selectAllData":
            console.log("Select All Data Called")
            ormOBJ.selectAll(function(stuff){
                return cb(stuff);
            });
        break;
    
        default:
            break;
    }

}

//create the code that will call the ORM functions using hotdog specific input for the ORM.
//?? What ??