//My stupid code bro
var msg = "Bro Ryan is so stupid ngl.";

var nut = 50;

nut = nut * 2;

msg = msg + " " + nut.toString();
//The end of my trash

//The main functions going on
var express = require("express");
var app = express();
var port = process.env.port || 3000;
//Yeet
//var path = require("path");

//setup a route for static files
app.use(express.static(__dirname+"/static"));

//main route
app.get("/", function(req,res){
    //res.send(msg);
    res.sendFile(__dirname+"/static/index.html");
});

app.get("/home", function(req,res){
    res.send("This is the home page.");
});

app.listen(port, function(){
    console.log("Running on localhost: " + local)
});

