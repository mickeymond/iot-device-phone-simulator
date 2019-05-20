var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') {
  // Listen for requests
  var server = app.listen(port, function() {
    var port = server.address().port;
    console.log('http port bound to ' + port);
  });
} else {
  var https = require('https');
  var fs = require('fs');
  // Start server and Listen for requests
  var server = https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert'),
  }, app).listen(port, function() {
    var port = server.address().port;
    console.log('http port bound to ' + port);
  })
}
