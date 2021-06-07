var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function(request, response){
	console.log('everything done');
	response.send("<h1>Welcome to the task to registration</h1>")
});

server.get("/userGet", function(request, response){
	console.log(request.query);
	response.send("you have successfully used Get method"+ JSON.stringify(request.query));
});

server.post("/userPost", function(request, response){
	console.log(request.body);
	response.send("you have successfully used Post method"+ JSON.stringify(request.body));
});

server.listen(3002);


