var Datastore = require('nedb');

carpooldb = new Datastore({filename: 'data/carpools.db', autoload: true});
/*
 * GET home page.
 */

exports.index = function(req, res){
  var data = {title: 'Let Us Ride'};

  carpooldb.find({}, function(err, docs){
    var i,
        carpools = [];

    console.log(docs.length);
    for(i = 0; i < docs.length; i++){
      console.log(JSON.stringify(docs[i]));
      carpools[i] = {name: docs[i].startLocation + " - " + docs[i].endLocation, url: docs[i].url};
    }
    data.carpool = carpools;
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
  console.log(JSON.stringify(req.body.carpool));
  carpooldb.insert(req.body.carpool, function(err, newDoc){
    console.error(err);
    res.end();

  });
};

exports.makePayment = function(req, res){
  
};

exports.updateInvitation = function(req, res){

};
