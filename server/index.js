var express = require("express");
var http  = require("http");

var app = express ();

app.use((req,res,next) => {
    console.log("in comming request to" + req.url);
    next();
})

app.use((req, res, next) => {
    res.writeHead(200, {"Content-Type": "html"});
    next();
})

app.use((req,res) => {
    var todate = (new Date().getTimezoneOffset)
    res.end("The last middleware " + todate)
})
http.createServer(app).listen(3000);


