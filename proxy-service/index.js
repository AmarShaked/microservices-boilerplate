var express = require('express')
var proxy = require('express-http-proxy');
var app = express()


app.use('/api', proxy('http://localhost:5311'));
app.use('/', proxy('http://localhost:5310'));


app.listen(8080, function () {
  console.log('The app gateway run on 8080!')
})