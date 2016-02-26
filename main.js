var express = require("express");
var app = express();
app.set('port', (process.env.PORT || 5000));
app.get('/', function(request, response){
 response.send("<h1> Hello world </h1>");
});
app.listen(app.get('port'), function(){
 console.log("listening on port ", app.get('port'));
});