var express = require("express");

var fs=require('fs')
var app = express();
app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response){
fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
});
app.listen(app.get('port'), function(){
 console.log("listening on port ", app.get('port'));
});