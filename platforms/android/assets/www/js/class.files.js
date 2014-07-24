// JavaScript Document
var appFiles = (function() {
	// PARAMATER
	
	
	// INIT
	function init(){
		initEvent()
	}
	
	function initEvent(){
		
	}
	
	// FUNCTIONS
    function downloadFiles(){
		alert('start');
        window.requestFileSystem(
                     LocalFileSystem.PERSISTENT, 0, 
                     function onFileSystemSuccess(fileSystem) {
                     fileSystem.root.getFile(
                                 "dummy.html", {create: true, exclusive: false}, 
                                 function gotFileEntry(fileEntry){
                                 var sPath = fileEntry.fullPath.replace("dummy.html","");
                                 var fileTransfer = new FileTransfer();
                                 fileEntry.remove();
 
                                 fileTransfer.download(
                                           "http://www.w3.org/2011/web-apps-ws/papers/Nitobi.pdf",
                                           sPath + "theFile.pdf",
                                           function(theFile) {
                                           console.log("download complete: " + theFile.toURI());
                                           alert('yes');
                                           },
                                           function(error) {
											alert('no');
                                           console.log("download error source " + error.source);
                                           console.log("download error target " + error.target);
                                           console.log("upload error code: " + error.code);
                                           }
                                           );
                                 }, 
                                 fail);
                     }, 
                     fail);
 
    }



	function getPhoneGapPath() {
		var path = window.location.pathname;
		path = path.substr( path, path.length - 10 );
		return 'file://' + path;	
	};

	
	// RETURN
	return {
		init:init,
		downloadFiles:downloadFiles
	}
})();		
