var express = require("express");

var app = express();

app.get('/', function(request, response){
  response.send("Route requested")
})

app.get('/chris', function(request, response){
  response.send("Chris requested");
})

app.get('/matthew', function(request, response){
  response.send("Matthew requested");
})

app.get('/john', function(request, response){
  response.send("John Requested");
})

app.listen(3000, function(){
  console.log("app is listening on http://localhost:3000");
})
