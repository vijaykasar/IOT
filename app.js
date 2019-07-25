var express = require('express');
var fs = require("fs");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var port = 7081;


console.log(__dirname);
app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.listen(port);
console.log('Server started! At http://localhost:' + port);



app.get('/settings/', function(req, res) {
    
});
