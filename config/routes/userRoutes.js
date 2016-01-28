var express = require('express');
var router = express.Router();
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../../controllers/users');

router.route('/')
	.get(usersController.getIndex);


router.route('/:id')
	.get(usersController.getUser)
	.patch(usersController.editUser)
	.delete(usersController.destroyUser);


module.exports = router