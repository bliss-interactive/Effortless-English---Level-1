// JavaScript Document
var Rules = (function() {
	// PARAMATER
	
	
	// INIT
	function init(){
		initEvent()
	}
	
	function initEvent(){
		$('.howicon.how-rules').click(function(e) {
            display();
        });
		
		$('.logo, .homeicon').click(function(e) {
            undisplay();
        });
		
	}
	
	// FUNCTIONS
	function display(){
		$('.howicon.how-rules, #audios-newmethod').css('display','none');
		$('#rules, .homeicon').css('display','block');
	}
	
	function undisplay(){
		$('.howicon.how-rules, #audios-newmethod').css('display','block');
		$('#rules, .homeicon').css('display','none');		
	}
	
	// RETURN
	return {
		init:init,
		undisplay:undisplay
	}
})();		
