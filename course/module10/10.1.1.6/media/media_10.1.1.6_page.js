loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js"); 

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var mainMovieClip;
var img = new Image();
		
		img.src="images/bubble_1.png";
		img.onload = function()
		{
			(Animation = function(control,id){

				var manifest = [
					{src:"images/_10_1_1_6.jpg", id:"_10_1_1_6"},
					{src:"images/_10_1_1_6_B.jpg", id:"_10_1_1_6_B"},
					{src:"images/Cloud.png", id:"Cloud"},
					{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
					{src:"images/bubble_1.png", id:"bubble_1"},
					{src:"images/unauthorized-user.png", id:"unauthorizeduser"},
					{src:"images/End_User_Female.png", id:"End_User_Female"},
					{src:"images/End_User_Male.png", id:"End_User_Male"},
					{src:"images/Server_file.png", id:"Server_file"}
				];

				return manifest;

			});
		}

