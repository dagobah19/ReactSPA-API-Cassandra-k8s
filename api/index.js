var express = require('express');
var cors = require('cors')
var app = express();
var cassandra = require('cassandra-driver'); 
var auth = new cassandra.auth.PlainTextAuthProvider('cassandra', 'cassandra');
var contactPoints = ['localhost'];
const port=3001

//allow CORS for all requests
app.use(cors()) 

var client = new cassandra.Client({contactPoints: contactPoints, 
    localDataCenter: 'datacenter1', 
    authProvider: auth, keyspace:'sensordata'
});

app.get('/', function (req, res) {
    res.send('Not implemented');
});

app.get('/sensorhealth', function(req,res){
    res.json(
        [{"sensorname":"demosensor","sensorhealth":"Healthy"}]
        )
});

app.get('/sensordata/:sensor', function(req,res) {
    var motionTrue=0;
    var motionFalse=0;
    var sensorName=req.params.sensor;
    var query = "SELECT motion from sensordata WHERE sensor_name = ?";
    client.stream(query,[sensorName])
        .on('readable', function(){
            var row;
            while (row=this.read()){
                if (row.motion === true) motionTrue++;
                if (row.motion === false) motionFalse++;
            }
        })
        .on('end', function () {
            // Stream ended, there aren't any more rows
            res.json([motionTrue,motionFalse]);
          })
          .on('error', function (err) {
            // Something went wrong: err is a response error from Cassandra
            res.json();
          });

});

app.use(function(req, res, next) {
    res.status(404).send("Not Found");
});

// start server on port
app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});