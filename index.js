var ports = require('./service-names-port-numbers.json');

module.exports = function() {
	return JSON.parse(JSON.stringify(ports));
};
