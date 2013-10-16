$(document).ready(function(){
 if(window.location.href.indexOf("google")>-1){	
		var logoid = document.getElementById("hplogo");
		console.log(logoid);
		$("#pagelet_ego_pane").remove();
		$('canvas#hplogoc').remove();
		$("#hplogo").text("");
		chrome.storage.local.get('imgHexaData',function(data){
    		$("#hplogo").css('background-image', 'url(' + data['imgHexaData'] + ')');
    		$("#hplogo").css('background-size',"360px 90px");
    	});
	}
});