var express = require('express');
var router = express.Router();


var userRoutes = require("./user");




router.use('/user', userRoutes);

module.exports = router;