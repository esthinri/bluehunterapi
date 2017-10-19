'use strict';
module.exports = function(app) {
	var book = require('../controllers/BookController');

// todoList Routes
app.route('/books')
.get(book.list)
.post(book.create);

app.route('/books/by-author/:author')
.get(book.filterByAuthor);


app.route('/books/by-title/:title')
.get(book.filterByTitle);


app.route('/books/by-id/:id')
.get(book.filterById)
.put(book.update)
.delete(book.delete);
};