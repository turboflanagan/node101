var http = require('http');
	// console.log("test");

var server = http.createServer(function(req, res){
	res.writeHead(200, {'content-type': 'text/html'})
	// res.end('<h1>hello world!</h1>');
	//req = http request
	//res = http response
	console.log("hello");
	setTimeout(function(){
		console.log("world");
	}, 3000);
	res.end();
});

server.listen(8000);
console.log("Our server is listening on port 8000");