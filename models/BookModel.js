console.log("Creating Book Schema");

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var bookSchema = new Schema({
  title: {
    type: String,
    required: 'Digite o titulo do livro'
  },
  author: {
    type: String,
    required: 'Digite o autor do livro'
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('book',bookSchema);