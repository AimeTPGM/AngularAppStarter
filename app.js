var path = require('path');
var express = require('express')
, cors = require('cors')
, app = express();

app.use(cors());

app.set('views', __dirname+'/public/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function (req, res) {
	res.sendFile(__dirname+'/public/common.html');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});