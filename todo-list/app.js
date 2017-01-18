'use strict';

// express
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src/client'));

app.listen(3000, function () {
    console.log('React Todo List listening on port 3000.');
});
