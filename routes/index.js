
/*
 * GET home page.
 */

exports.index = function(req, res){
  var data = {title: 'Let Us Ride'};
  data.carpool = [];
  res.render('index', data);
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
