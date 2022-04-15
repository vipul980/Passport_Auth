var express = require('express');
var router = express.Router();
const {userAuth} = require('../middleware/auth');
const Validator = require('../middleware/validator');

/*===Controller Listing===*/
var user = require("../controller/user");

/*======Routes=====*/
router.post("/registerUser",Validator.registrationRules(), Validator.validate, user.registerUser);
router.get("/profile",userAuth, user.getUser);

module.exports = router;