'use strict';
module.exports = function(app) {
	var user = require('../controllers/UserController');
	
	app.route('/users')
		.get(user.list)
		.post(user.create);

	app.route('/users/by-name/:name')
	.get(user.filterByName);

	app.route('/users/by-id/:id')
	.get(user.filterById)
	.put(user.update)
	.delete(user.delete);
};

