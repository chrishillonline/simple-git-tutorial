var express = require("express");

var app = express();

app.get('/', function(request, response){
  response.send("Route requested")
})

<<<<<<< HEAD
app.get('/chris', function(request, response){
  response.send("Chris requested");
})

app.get('/matthew', function(request, response){
  response.send("Matthew requested");
})

app.get('/jordan', function(request, response){
  response.send("jordan requested");
});

app.get('/john', function(request, response){
  response.send("John Requested");
});

app.get('/alex', function)request, response){
  response.send("Alex Requested");
});

=======
app.get('/itezaz', function(request, response){
  response.send("itezaz requested");
})

>>>>>>> itezaz
app.listen(3000, function(){
  console.log("app is listening on http://localhost:3000");
})
