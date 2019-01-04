// var app = require('express')();
// var fileUpload = require('express-fileupload');
// var mongoose = require('mongoose');

// var server = require('http').Server(app);

// app.use(fileUpload());

// server.listen(3000);

// mongoose.connect('mongodb+srv://wanchain:wanchain@cluster0-nmisc.mongodb.net/csvimport');

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

// var template = require('./template.js');
// app.get('/template', template.get);

// var upload = require('./upload.js');
// app.post('/', upload.post);


var app = require('express')();
var fileUpload = require('express-fileupload');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var server = require('http').Server(app);

app.use(fileUpload());

server.listen(port);


mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://wanchain:wanchain@cluster0-nmisc.mongodb.net/One').then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );


// mongoose.connect('mongodb+srv://wanchain:wanchain@cluster0-nmisc.mongodb.net/One');
// mongoose.connect('mongodb://localhost:27017/csvimport');
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var template = require('./template.js');
app.get('/template', template.get);

var upload = require('./upload.js');
app.post('/', upload.post);
