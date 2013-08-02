var bencode = require('bencode'),
mktorrent = Object.create({});

function Torrent() {
	this.files = [];
}

Torrent.prototype = {
	encode: function() {
		return bencode.encode('test');
	}
}

Torrent.createFromDecode = function(data) {
	return bencode.decode(data).toString();
}

function TorrentFactory() {
	this.test = 1;
}

TorrentFactory.prototype = {
	create : function() {
		return new Torrent;
	}
}

module.exports = {
	mktorrent: TorrentFactory,
	create: function(files) {

	},
	readTorrent: function(data) {
		return Torrent.createFromDecode(data);
	}
}