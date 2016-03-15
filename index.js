var express = require("express");

var app = express();

app.get('/', function(request, response){
  response.send("Route requested");
})

app.get('/itezaz', function(request, response){
  response.send("itezaz requested");
})

app.listen(3000, function(){
  console.log("app is listening on http://localhost:3000");
})
