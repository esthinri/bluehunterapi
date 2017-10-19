'use strict';


var mongoose = require('mongoose'),
User = mongoose.model('user');


exports.list = function(req, res) {
  User.find({}, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};


exports.filterByName  = function(req, res) {
  User.find({ "name": { "$regex": req.params.name, "$options": "i" } }, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};

exports.filterById  = function(req, res) {
  User.findById(req.params.id, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};


exports.create = function(req, res) {
  var new_User = new User(req.body);
  new_User.save(function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};


exports.read = function(req, res) {
  User.findById(req.params.UserId, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};


exports.update = function(req, res) {
  User.findOneAndUpdate({_id: req.params.UserId}, req.body, {new: true}, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};


exports.delete = function(req, res) {
  User.remove({
    _id: req.params.UserId
  }, function(err, User) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};


