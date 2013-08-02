var mktorrent = require('../lib/mktorrent'),
	util = require('util');
var t = mktorrent.create('sampledata.txt');
t.save(__dirname + '/test.torrent');
mktorrent.read(__dirname + '/test.torrent',function(data) {
	console.log(util.inspect(data));
});