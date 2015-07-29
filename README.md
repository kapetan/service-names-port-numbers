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
}
```

Note that not all properties are necessarily present on each entry.
