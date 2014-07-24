// JavaScript Document
var Audios = (function() {
	// PARAMATER
	var setting = {
		current_media : null
	};
	
	// INIT
	function init(){

	}

	// FUNCTIONS
	function play(url) {
		console.log('audio:play-'+ url);
		if(DEMO) return;
		
		url = getPhoneGapPath() + url;
		// Play the audio file at url

		stop();
		
		setting.current_media = new Media(url,
			// success callback
			function() {
				console.log("playAudio():Audio Success");
				var dur = setting.current_media.getDuration();
			},
			// error callback
			function(err) {
				console.log("playAudio():Audio Error: "+err);
			}
		);
		
		// Play audio
		setting.current_media.play();
	}
	
	function stopandclear(){
		console.log('audio:stopandclear');
		if(DEMO) return;
		
		try {
			setting.current_media.stop();
			setting.current_media.release();				
		}
		catch(err) {
		
		}
	}
	
	// FUNCTIONS
	function getPhoneGapPath() {
		var path = window.location.pathname;
		path = path.substr( path, path.length - 10 );
		return 'file://' + path;	
	};
	
	// RETURN
	return {
		init:init,
		stopandclear:stopandclear,
		play:play
	}
})();		
