

var express = require("express");
var app = express();
var port = process.env.port || 3000;


//setup a route for static files
app.use(express.static(__dirname+"/static"));

app.listen(port, function(){
    console.log("Running on localhost: ");
});

