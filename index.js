var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function(req, res) {
  if (!req.body['custom field 1']) {
    res.status(400).send('Missing Device Name'); 
    return;
  }

  db.gps_tracker
  .create({
    device: req.body['custom field 1'],
    lat: req.body.latitude,
    long: req.body.longitude,
    accuracy: req.body.accuracy,
    altitude: req.body.altitude,
    speed: req.body.speed,
    offset: req.body.offset
  })
  .then(function(data) {
    console.log(data);
  });

  res.status(200).send('success');
});

app.listen(3000);