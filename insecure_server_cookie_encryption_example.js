var express = require('express');
var cookieParser = require('cookie-parser');
var escape = require('escape-html');
var serialize = require('node-serialize');
var cookieEncrypter = require('./cook');
var app = express();
//Don't hard code secret keys, this is done only for example purposes
var secretKey = 'aaa%M@MEYYPYxr8G3@KXJvaZh!e5L0eO';

app.use(cookieParser(secretKey));
app.use(cookieEncrypter(secretKey));
 
app.get('/', function(req, res) {
  if (req.signedCookies.profile) {
    //accepting serialized data from an untrusted source is not recommended, even if encrypted
    var str = new Buffer(req.signedCookies.profile, 'base64').toString();
    var obj = serialize.unserialize(str);
    if (obj.username) {
      res.send("Hello " + escape(obj.username));
    }
  } else {
    res.cookie('profile', "eyJ1c2VybmFtZSI6ImJpbGwiLCJjb3VudHJ5IjoidXMiLCJjaXR5IjoiYXVzdGluIn0=", {
      maxAge: 900000,
      signed: true,
      httpOnly: true
    });
  }
  res.send("Hello World");
});
app.listen(3000);
console.log("Listening on port 3000...");