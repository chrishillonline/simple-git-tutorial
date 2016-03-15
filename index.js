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

app.get('/jordan', function(request, response){
  response.send("jordan requested");
})

app.listen(3000, function(){
  console.log("app is listening on http://localhost:3000");
})
