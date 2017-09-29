var http = require('http');

function dealWithWebRequest(request, response)
{
	response.writeHead(200, { 'Content-Type': 'text/plain'});
	response.write("Hello node!");
	response.end();

}

var webserver = http.createServer(dealWithWebRequest).listen(8124,"127.0.0.1");


webserver.once('listening', function(){
	console.log('Server is running at port 127.0.0.1');
});