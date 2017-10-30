// Node Dependency
var orm = require('../config/orm.js');

// create the code that will call the ORM functions using burger specific input for the ORM.
var shake = {

  selectAll: function(callback){
    orm.selectAll("shakes", function(res){
      callback(res);
    });
  },

  insertOne: function(shake_name, callback){
    orm.insertOne("shakes", "shake_name", [shake_name], function(res){
      callback(res);
    });
  },

  updateOne: function(shake_id, obj, callback){
    orm.updateOne("shakes", obj, "id = " + shake_id, function(res){
      callback(res);
    });
  }

};

// Export at the end of the burger.js file.
module.exports = shake;