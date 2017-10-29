// Node Dependency
var orm = require('../config/orm.js');

// create the code that will call the ORM functions using burger specific input for the ORM.
var shake = {

  selectAll: function(callback){
    orm.selectAll(function(res){
      callback(res);
    });
  },

  insertOne: function(shake_name, callback){
    orm.insertOne(shake_name, function(res){
      callback(res);
    });
  },

  updateOne: function(shake_id, callback){
    orm.updateOne(shake_id, function(res){
      callback(res);
    });
  }

};

// Export at the end of the burger.js file.
module.exports = shake;