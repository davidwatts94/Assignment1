<<<<<<< HEAD
var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url).pathname;
  if ( parsedUrl == '/listings'){
    response.writeHead(200, "application/json");
    response.write(listingData);
    response.end();
  }
  else{
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Bad gateway error');
    response.end();
  }

  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  
  listingData = data;

  var server = http.createServer(requestHandler);

  server.listen(port, function() {
  //once the server is listening, this callback function is executed
  console.log('Server listening on: http://127.0.0.1:' + port);
});

/*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
});
=======
var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url).pathname;
  if ( parsedUrl == '/listings'){
    response.writeHead(200, "application/json");
    response.write(listingData);
    response.end();
  }
  else{
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Bad gateway error');
    response.end();
  }

  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  
  listingData = data;

  var server = http.createServer(requestHandler);

  server.listen(port, function() {
  //once the server is listening, this callback function is executed
  console.log('Server listening on: http://127.0.0.1:' + port);
});

/*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
});
>>>>>>> 86812b7097188c8805e6c6e6c2ef26d3bed4fc73
