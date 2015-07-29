var http = require('http');
var fs = require('fs');
var path = require('path');
var param = require('param');

var CSV = fs.readFileSync(path.join(__dirname, 'fixture.csv'));

module.exports = function(callback) {
	var server = http.createServer(function(request, response) {
		response.writeHead(200, {
			'Content-Length': CSV.length,
			'Content-Type': 'text/csv; charset=utf-8'
		});

		response.end(CSV);
	});

	server.listen(param('port'), callback);
	server.unref();

	return server;
};
