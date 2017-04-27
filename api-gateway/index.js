var express = require('express')
var proxy = require('express-http-proxy');
var app = express()

app.use('/auth', proxy('http://localhost:5311'));

app.listen(8080, function () {
  console.log('The api gateway run on 8080!')
})