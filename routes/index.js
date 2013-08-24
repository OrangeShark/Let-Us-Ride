var Datastore = require('nedb');

carpooldb = new Datastore({filename: 'data/carpools.db', autoload: true, nodeWebkitAppName: 'Let-Us-Ride'});
/*
 * GET home page.
 */

exports.index = function(req, res){
  var data = {title: 'Let Us Ride'};

  carpooldb.find({}, function(err, docs){
    var i,
        carpools = [];
    for(i = 0; i < docs.length; i++){
      carpools[i] = {name: docs[i].name, url: docs[i].url};
    }
    res.render('index', data);
  });
};

exports.create = function(req, res){
  var data = {title: 'Let Us Ride - Create a carpool'};
  res.render('create', data);
};

exports.carpool = function(req, res){
  var data = {title: 'Let Us Ride - Carpool'};
  res.render('carpool', data);
};

exports.invitation = function(req, res){
  var data = {title: 'Let Us Ride - Invitation'};
  res.render('invitation', data);
};

exports.payment = function(req, res){
  var data = {title: 'Let Us Ride - Payment'};
  res.render('payment', data);
};

exports.submitCarpool = function(req, res){
  
};

exports.makePayment = function(req, res){

};

exports.updateInvitation = function(req, res){

};
