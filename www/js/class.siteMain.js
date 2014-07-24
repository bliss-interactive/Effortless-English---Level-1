// JavaScript Document
var siteMain = (function() {
	// PARAMATER
	
	// INIT
	function init(){
		Responsize.init();
	}

	// LISTAUDIO
	function scrollAudio(){
		$('.listaudio section ul').mCustomScrollbar({
			scrollTools_Class:'scrollToolFixed',
			scrollInertia: 0,
			mouseWheelPixels: 70,
		    advanced:{
		        updateOnContentResize: true
		    }
		});
	}
	
	// RETURN
	return {
		init:init,
		scrollAudio:scrollAudio
	}
})();		

$(document).ready(function(e) {
    siteMain.init();
});

$(window).load(function(e) {
    siteMain.scrollAudio();
});