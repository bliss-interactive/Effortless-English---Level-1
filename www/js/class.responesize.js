// JavaScript Document
var Responsize = (function() {
	// PARAMATER
	var setting = {
		font	:	16,
		w		:	640,
		h		:	960
	}
	
	// INIT
	function init(){
		respone();
		$(window).resize(function(e) {
            respone();
        });
	}

	// FUNCTIONS
	function respone(){
		var f = ($(window).height()*setting.font)/setting.h;
		$('body').css('font-size', f + 'px' );
	}
	
	// RETURN
	return {
		init:init
	}
})();		
