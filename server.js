//

var express = require('express');
var cors = require('cors');
var app = express();

//CORS - Cross-Origin Resource Sharing. it allows us to relax the security
//It is applied to an API
var corsOptions = {
    origin: "http://localhost:8081"
};
console.log('Project running!');
