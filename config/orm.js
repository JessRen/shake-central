
// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

// Import Node Dependencies
var connection = require('../config/connection.js');

// Connect to MySQL database
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});



// Methods for MySQL commands

function printQuestionMarks(num){
  var arr = [];

  for (var i=0; i<num; i++){
    arr.push('?')
  };

  return arr.toString();
};

function objToSql(ob){
  //column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + '=' + ob[key]);
  };

  return arr.toString();
};



var orm = {

  // selectAll() - handy for display of present facts of the database

  selectAll: function(tableInput, cb){
    var queryString = 'SELECT * FROM ' + tableInput;

    connection.query(queryString, function(err, result){
      if(err) throw err;
      cb(result);
    });
  },

  // compile queries appropriate to add to the database display to the website

  insertOne: function(table, col, vals, cb){
    var queryString = 'INSERT INTO ' + table;
    queryString = queryString + ' (';
    queryString = queryString + col.toString(); 
    queryString = queryString + ') ';
    queryString = queryString + 'VALUES (';
    queryString = queryString + printQuestionMarks(vals.length);
    queryString = queryString + ') ';

    connection.query(queryString, vals, function(err, result){
      if(err) throw err;
      cb(result);
    });
  },
  
  // compile queries appropriate to update status of devoured shake orders

  updateOne: function(table, objColVals, condition, cb){
    var queryString = 'UPDATE ' + table;
    queryString = queryString + ' SET ';
    queryString = queryString + objToSql(objColVals);
    queryString = queryString + ' WHERE ';
    queryString = queryString + condition;

    console.log(queryString);

    connection.query(queryString, function(err, result){
      if(err) throw err;
      cb(result);
    });
  }
};

// Export the ORM object in module.exports.
module.exports = orm;


