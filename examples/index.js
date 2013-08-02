var mktorrent = require('../lib/mktorrent');
var b = new mktorrent.mktorrent;
var c = b.create().encode();
console.info(mktorrent.readTorrent(c));