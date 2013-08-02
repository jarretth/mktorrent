Create a torrent
#Exports
##Torrent Object
	addFile - adds a file(should support globbing and shit)
	removeFile - remove files from list
	getFiles - guess
	addAnnounceURL
	setPieceSize - default 256k
	exportDictionary - export unencoded dictionary
	encode - generates encoded torrentfile
	save - saves generated torrentfile to disk

	createFromDecode - returns a torrent object loaded from data
#create Function
	Takes a list of files, generates a torrent file

#read Function
	Reads a file, returns a torrent object
