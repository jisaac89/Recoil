"user strict";

var express = require("express");
var app = express();
var path = require("path");
var expressStaticGzip = require("express-static-gzip");

// define the public folder to use
// app.use(express.static("public"));

app.use("/", expressStaticGzip("public", {
  enableBrotli: true,
  customCompressions: [{
    encodingName: "deflate",
    fileExtension: "zz"
  }]
}));

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.get('*.css', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');
  next();
});

// app.use(express.static('dist'));

app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(8000, function () {
  console.log("listen");
})