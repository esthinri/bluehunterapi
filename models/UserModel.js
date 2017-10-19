console.log("Creating User Schema");

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
  name: {
    type: String,
    required: 'Digite o nome do usuário'
  },
  email: {
    type: String,
    required: 'Digite o e-mail do usuário'
  },
  password: {
    type: String,
    required: 'Digite a senha do usuário'
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', userSchema);