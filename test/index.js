var test = require('tape');
var server = require('./server');
var fetch = require('../fetch');
var ports = require('../');

test('fetch csv', function(t) {
	server(function() {
		fetch(function(err, data) {
			t.error(err);

			t.deepEqual(data, [{
				'Port Number': '1023',
				'Transport Protocol': 'tcp',
				'Description': 'Reserved'
			}, {
				'Service Name': 'test',
				'Port Number': '1024',
				'Transport Protocol': 'tcp',
				'Description': 'Test service',
				'Assignee': '[Assignee]',
				'Contact': '[Contact]',
				'Registration Date': '2015-07-01',
				'Modification Date': '2015-07-01',
				'Reference': '[RFC-reference]',
				'Service Code': '000000',
				'Known Unauthorized Uses': 'Unauthorized use by IANA',
				'Assignment Notes': 'Test entry'
			}]);

			t.end();
		});
	});
});

test('ports', function(t) {
	var list = ports();

	t.ok(Array.isArray(list));
	t.ok(list.length > 0);
	t.end();
});
