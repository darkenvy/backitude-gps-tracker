var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  res.status(200).send("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
});

app.get('/latest', function(req, res) {
  db.gps_tracker.findAll({
    limit: 1,
    order: [ [ 'createdAt', 'DESC' ]]
  }).then(function(entries) {
    //res.send(JSON.stringify(entries[0].lat));
    var url = 'http://maps.google.com/maps?q=loc:';
    url += entries[0].lat + ',';
    url += entries[0].long;
    res.redirect(url);
  });
});

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

console.log('listening on port 3000');
app.listen(3000);
