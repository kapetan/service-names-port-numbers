var request = require('request');
var csvParse = require('csv-parse');
var isOk = require('is-ok');
var param = require('param');

var fetch = function(callback) {
	request(param('url'), function(err, response, body) {
		if(err) return callback(err);
		if(!isOk(response, callback)) return;

		csvParse(body, { columns: true }, function(err, data) {
			if(err) return callback(err);

			data.forEach(function(entry) {
				Object.keys(entry).forEach(function(key) {
					if(entry[key] === '') delete entry[key];
				});
			});

			callback(null, data);
		});
	});
};

module.exports = fetch;

if(require.main === module) {
	fetch(function(err, data) {
		if(err) throw err;
		console.log(JSON.stringify(data, null, 4));
	});
}
