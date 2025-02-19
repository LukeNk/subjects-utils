# Licenses Utilities

[![NPM version](https://badge.fury.io/js/subjects-utils.svg)](http://badge.fury.io/js/subjects-utils)

This node package contains multiple utilies to manage BISAC subjects.

### How to install it?

```
$ npm install subjects-utils
```

### How to use it?

Include the library:

```js
var subjects = require("subjects-utils");
```

By code:

```js
var subject = subjects.byCode("ANT007000");
// subject.label -> "ANTIQUES & COLLECTIBLES / Buttons & Pins"
```

By label:

```js
var subject = subjects.byLabel('ANTIQUES & COLLECTIBLES / Dolls');
// subject.code -> "ANT007000"
```

Search subjects by lable name, return an array of subjects that have the lable match the query.

```js
var dollSubjects = subjects.search('ANTIQUES & COLLECTIBLES / Dolls');
// dollSubjects -> [ { code: 'ANT015000', label: 'ANTIQUES & COLLECTIBLES / Dolls' } ]
```

All BISAC codes:

```js
subjects.all.bisac
```
