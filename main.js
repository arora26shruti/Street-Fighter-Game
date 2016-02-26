
var express = require("express");

var fs=require('fs');
var http = require('http');

var app = express();
app.set('port', (process.env.PORT || 5001));

app.get('/', function(request, response){
	fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
});

app.get('/style.css', function(request, response){
	fs.readFile('style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
});


app.get('/style.js', function(request, response){
	fs.readFile('style.js', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/javascript'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
});


app.get('/sf2hf-blanka.gif', function(request, response){
	fs.readFile('sf2hf-blanka.gif', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/gif'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
});

app.get('/steetfighter_sprite.png', function(request, response){
	fs.readFile('steetfighter_sprite.png', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/png'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
});

app.listen(app.get('port'), function(){
 console.log("listening on port ", app.get('port'));
});