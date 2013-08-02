var bencode = require('bencode'),
fs = require('fs');

function Torrent(files,url) {
    this.files = [];
    this.url = '';
    this.pieceSize = 262144;
    this.addFile(files);
    this.addAnnounceURL(url);
}

Torrent.prototype = {
    encode: function() {
        return bencode.encode(this.exportDictionary());
    },
    addFile: function(files) {
        if(!files) return;
        if(!(files instanceof Array)) files = [files];
        var me = this;
        files.forEach(function(file) {
            me.files.push(file);
        });
    },
    removeFile: function(files) {
        if(!files) return;
        if(!(files instanceof Array)) files = [files];
        var me = this;
        files.forEach(function(file) {
            while((i = this.files.indexOf(files)) >= 0)
                me.files.splice(i,1);
        });
    },
    getFiles: function() {
        return this.files;
    },
    addAnnounceURL: function(url) {
        if(!url) return;
        this.url = url;
    },
    setPieceSize: function(size) {
        this.pieceSize = size;
    },
    exportDictionary: function() {
        return {
            'announce': this.url,
            'info':
            {
                'name': 'debian-503-amd64-CD-1.iso',
                'piece length': this.pieceSize,
                'length': 678301696,
                'pieces': 'test'
            }
        };
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
    create: function(files,url) {
        var t = new Torrent(files,url);
        t.setPieceSize(262144);
        return t;
    },
    read: function(file,callback) {
        var f = fs.readFile(file, function(err,data) {
            if(err) throw err;
            callback && callback(Torrent.createFromDecode(data));
        });
    }
}