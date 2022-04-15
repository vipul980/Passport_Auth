var express = require('express');
var app = express();
const passport = require("passport")
var indexRouter = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
require("./middleware/passport")(passport);

app.use('/api/', indexRouter);

module.exports = app
