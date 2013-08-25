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
      carpools[i] = {name: docs[i].startLocation + " - " + docs[i].endLocation, url: "/carpool/" + docs[i]._id};
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
  console.log(req.params.id);
  carpooldb.find({_id:req.params.id}, function(err, docs){
    data.name = docs[0]._id;
    data.startLocation = docs[0].startLocation;
    data.endLocation = docs[0].endLocation;
    data.date = docs[0].date;
    data.time = docs[0].time;
    data.cost = docs[0].cost;
  
    res.render('carpool', data);
  });
};

exports.updateCarpool = function(req, res){
 

} 

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
  var carpool = req.body.carpool;
  carpool.riders = [];
  carpooldb.insert(carpool, function(err, newDoc){
    if(err) console.error(err);
    res.redirect('/carpool/' + newDoc._id);

  });
};

exports.makePayment = function(req, res){
  
};

exports.updateInvitation = function(req, res){

};
