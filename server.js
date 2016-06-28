var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
var router = express.Router();
router.route('/')
  .get(function(req, res) {
    res.status(200).json({message: 'hi'});
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', router);

var server = http.createServer(app)
.listen(port, function(err) {
  console.log('http at port: ', port);
});

process.on('SIGTERM', function () {
  console.log('SIGTERM detected');
  server.close(function () {
    console.log('server closed, process exiting');
    process.exit(0);
  });
});
