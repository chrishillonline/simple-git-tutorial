var express = require("express");

var app = express();

app.get('/', function(request, response){
  response.send("Route requested")
})

app.get('/chris', function(request, response){
  response.send("Chris requested");
})

app.listen(3000, function(){
  console.log("app is listening on http://localhost:3000");
})
