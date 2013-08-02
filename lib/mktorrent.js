var bencode = require('bencode'),
fs = require('fs');

function Torrent() {
    this.files = [];
    this.data = {
        'announce': 'http://bttracker.debian.org:6969/announce',
        'info':
        {
            'name': 'debian-503-amd64-CD-1.iso',
            'piece length': 262144,
            'length': 678301696,
            'pieces': 'test'
        }
    };
}

Torrent.prototype = {
    encode: function() {
        return bencode.encode(this.data);
    },
    addFile: function(files) {
        if(!files instanceof Array) files = [files];
        files.forEach(function(file) {
            this.files.push(file);
        });
    },
    removeFile: function(files) {
        if(!files instanceof Array) files = [files];
        files.forEach(function(file) {
            while((i = this.files.indexOf(files)) >= 0)
                this.files.splice(i,1);
        });
    },
    getFiles: function() {
        return this.files;
    },
    addAnnounceURL: function() {

    },
    setPieceSize: function(size) {
        this.pieceSize = size;

    },
    exportDictionary: function() {
        return this.data;
    },
    save: function(filename,done) {
        fs.writeFile(filename,this.encode(),function(err){
            if(err) throw err;
            done && done();
        });
    }
}

Torrent.createFromDecode = function(data) {
    return bencode.decode(data);
}

module.exports = {
    Torrent: Torrent,
    create: function(files) {

    },
    read: function(file,callback) {
        var f = fs.readFile(file, function(err,data) {
            if(err) throw err;
            callback && callback(Torrent.createFromDecode(data));
        });
    }
}