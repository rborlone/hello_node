var http = require('http');

var handleRequest = function(request, response){
    console.log('Recibi esta peticion desde ' + request.url);
    response.writeHead(200);
    response.end('Hola mundo desde ' + process.env.HOSTNAME);
};

var www = http.createServer(handleRequest);
www.listen(8080);