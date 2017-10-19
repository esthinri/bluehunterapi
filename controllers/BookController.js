'use strict';


var mongoose = require('mongoose'),
Book = mongoose.model('book');

exports.list = function(req, res) {
  console.log('Book: List all');
  Book.find({}, function(err, Book) {
    if (err)
      res.send(err);
    res.json(Book);
  });
};



exports.filterByTitle = function(req, res) {
  console.log('Book: Filter by Title');
  Book.find({ "bookTitle": { "$regex": req.params.title, "$options": "i" } }, function(err, Book) {
    if (err)
      res.send(err);
    res.json(Book);
  });
};

exports.filterByAuthor = function(req, res) {
  console.log('Book: Filter by Author');
  Book.find({ "bookAuthor": { "$regex": req.params.author, "$options": "i" } }, function(err, Book) {
    if (err)
      res.send(err);
    res.json(Book);
  });
};

exports.filterById = function(req, res) {
  console.log('Book: Filter by ID');
  User.findById(req.params.id, function(err, Book) {
    if (err)
      res.send(err);
    res.json(Book);
  });
};

exports.create = function(req, res) {
  console.log('Book: Register new book');
  var new_Book = new Book(req.body);
  new_Book.save(function(err, Book) {
    if (err)
      res.send(err);
    res.json(Book);
  });
};


exports.read = function(req, res) {
  console.log('Book: Read a book');
  Book.findById(req.params.BookId, function(err, Book) {
    if (err)
      res.send(err);
    res.json(Book);
  });
};


exports.update = function(req, res) {
  console.log('Book: Updating book');
  Book.findOneAndUpdate({_id: req.params.BookId}, req.body, {new: true}, function(err, Book) {
    if (err)
      res.send(err);
    res.json(Book);
  });
};


exports.delete = function(req, res) {
  console.log('Book: Deleting book');
  Book.remove({
    _id: req.params.BookId
  }, function(err, Book) {
    if (err)
      res.send(err);
    res.json({ message: 'Book successfully deleted' });
  });
};


