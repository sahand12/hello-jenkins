var express = require('express');
var app = express();

app.get('/', function (req, res, next) {
	return res.send('hello world');
});

app.listen(3000);
module.exports = app;