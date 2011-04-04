/*
  Spirit is a fast, lightweight text-driven database. Geared for prototypes, with easy replacement, and for small projects.
  
  Usage:
  
  var spirit = require('spirit');
  
  ..Network data..e.g. get('/something/:id'), function(req, res) {
    var id = req.param.id;
    spirit.openDatafile('something/ids.dat', 'id', id, function(data) {
      //Use your data, e.g. res.render('userpage', { username: data.username });
    });
    
    var userDataWouldBeNice;
    //same code as before, mostly
    spirit.openDatafile('something/ids.dat', 'id', id, function(err, data) {
      if (err) console.log(err);
      userDataWouldBeNice = data;
    });
    
    userDataWouldBeNice.powerlevel++;
    
    spirit.saveDatafile('something/ids.dat', 'id', id, userDataWouldBeNice, function(err) {
      if (err) console.log(err);
    });
    
    //Yay :)
    */
    
var fs = require('fs');

//Retrieves a specific entry from a datafile
exports.openData = function(path, keyName, index, callback) {

}

//Finds and reverse engineers a data type and provides a blank object safe for filling and saving
exports.getDataSlate = function(path, keyName) {

}

//Saves a specific entry to a datafile
//Parameters:
//  data - suggested use getDataSlate()'s return value with matching parameters
exports.saveData = function(path, keyName, index, data, callback) {

}

//Removes a specific entry from a datafile
exports.deleteData = function(path, keyName, index, callback) {

}

//Deletes a datafile
exports.deleteDatafile = function(path) {

}


//Clears a datafile, leaving the file empty
exports.clearDatafile = function(path) {

}
