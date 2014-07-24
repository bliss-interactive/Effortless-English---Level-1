// JavaScript Document
var siteMain = (function() {
	// PARAMATER
	
	// INIT
	function init(){
		Responsize.init();
		initEvent();
		Audios.init();
		Rules.init();
	}
	
	function initEvent(){
		$('.listaudio section ul li').click(function(e) {
			var url = $(this).attr('file');
            displayPageAudio(url);	
			
			$( '#mCSB_1_container' ).html('');
			$( '#mCSB_1_container' ).html( $('#' + $(this).attr('text')).html() );
			
        });
		
		$('.audio').click(function(e) {
            undisplayPageAudio();
        });
	}
	
	// LISTAUDIO
	function displayPage(pageID){
		$('.page').stop(true,false).animate({'opacity':0}, 500,function(){
			$(this).css('display','none');
		});
		//alert(pageID);
		$(pageID).stop(true,false).css({'display':'block','opacity':0}).animate({'opacity':1}, 500);
	}
	function scrollAudio(){
		$('#ptext-MS').mCustomScrollbar({
			scrollTools_Class:'scrollToolFixed',
			scrollInertia: 0,
			mouseWheelPixels: 70,
		    advanced:{
		        updateOnContentResize: true
		    }
		});
	}
	
	// AUDIO
	function displayPageAudio(url){
		scrollAudio();
		$(".listaudio").transition({ x: -$(window).width() }, 500, function(){
			Audios.play(url);
		});
	}
	
	function undisplayPageAudio(){
		$(".listaudio").transition({ x: 0 }, 500);
		Audios.stopandclear();
	}
	
	// FUNCTIONS 
	function run(){
		setTimeout(function(){
			displayPage('.listaudio');
		},2000);		
		siteMain.scrollAudio();
		
		displayPage('.page.intro');
	}
	
	// RETURN
	return {
		init:init,
		run:run,
		scrollAudio:scrollAudio
	}
})();		

$(document).ready(function(e) {
    siteMain.init();
});

$(window).load(function(e) {
	if(DEMO);
		siteMain.run();
});