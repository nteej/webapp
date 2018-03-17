#!/usr/bin/env node

/** server.js  */

var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
app.use( express.static( "public" ) );
// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function (req, res) {
    res.render('pages/about');
});

app.listen(8000);
console.log('8000 is the magic port');
