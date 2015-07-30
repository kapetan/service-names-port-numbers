var test = require('tape');
var server = require('./server');
var fetch = require('../fetch');
var ports = require('../');

test('fetch csv', function(t) {
	server(function() {
		fetch(function(err, data) {
			t.error(err);

			t.deepEqual(data, [{
				PortNumber: '1023',
				TransportProtocol: 'tcp',
				Description: 'Reserved'
			}, {
				ServiceName: 'test',
				PortNumber: '1024',
				TransportProtocol: 'tcp',
				Description: 'Test service',
				Assignee: '[Assignee]',
				Contact: '[Contact]',
				RegistrationDate: '2015-07-01',
				ModificationDate: '2015-07-01',
				Reference: '[RFC-reference]',
				ServiceCode: '000000',
				KnownUnauthorizedUses: 'Unauthorized use by IANA',
				AssignmentNotes: 'Test entry'
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
