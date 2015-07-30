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

			data = data.map(function(entry) {
				return Object.keys(entry).reduce(function(acc, key) {
					if(entry[key] !== '') acc[key.replace(/\s+/g, '')] = entry[key];
					return acc;
				}, {});
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
