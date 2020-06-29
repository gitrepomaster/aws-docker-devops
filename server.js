var http = require('http');
var handleRequest = function (request, response) {
  response.writeHead(200);
  
  response.end('AWS Codepipeline Sample App Deployed Successfully!');
  
};
var www = http.createServer(handleRequest);
www.listen(8080);
