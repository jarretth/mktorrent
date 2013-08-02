var mktorrent = require('../lib/mktorrent'),
	util = require('util');
var t = new mktorrent.Torrent;
t.save(__dirname + '/test.torrent');
mktorrent.read(__dirname + '/test.torrent',function(data) {
	console.log(util.inspect(data));
});