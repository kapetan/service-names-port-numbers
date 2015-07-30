# service-names-port-numbers

A simple json list with IANA assigned port numbers. See IANAs [Service Name and Transport Protocol Port Number Registry](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml) for more details.

	npm install service-names-port-numbers

# Usage

```javascript
var ports = require('service-names-port-numbers')();
```

In the above example `ports` is an array containg objects with following format.

```javascript
{
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
}
```

Note that not all properties are necessarily present on each entry.
