loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad = function(slideContainer,id){
	
	var manifest;
	
	if(id == 1)
	{
		manifest = [{src:"slide-1-animation.js", id:"animFile"},
			{src:"images/FlatheadScrewdriver0001.png", id:"FlatheadScrewdriver0001"},
			{src:"images/FlatheadScrewdriver0002.png", id:"FlatheadScrewdriver0002"},
			{src:"images/FlatheadScrewdriver0003.png", id:"FlatheadScrewdriver0003"},
			{src:"images/FlatheadScrewdriver0004.png", id:"FlatheadScrewdriver0004"},
			{src:"images/FlatheadScrewdriver0005.png", id:"FlatheadScrewdriver0005"},
			{src:"images/FlatheadScrewdriver0006.png", id:"FlatheadScrewdriver0006"},
			{src:"images/FlatheadScrewdriver0007.png", id:"FlatheadScrewdriver0007"},
			{src:"images/FlatheadScrewdriver0008.png", id:"FlatheadScrewdriver0008"},
			{src:"images/FlatheadScrewdriver0009.png", id:"FlatheadScrewdriver0009"},
			{src:"images/FlatheadScrewdriver0010.png", id:"FlatheadScrewdriver0010"},
			{src:"images/FlatheadScrewdriver0011.png", id:"FlatheadScrewdriver0011"},
			{src:"images/FlatheadScrewdriver0046.png", id:"FlatheadScrewdriver0046"},
			{src:"images/FlatheadScrewdriver0047.png", id:"FlatheadScrewdriver0047"},
			{src:"images/FlatheadScrewdriver0048.png", id:"FlatheadScrewdriver0048"},
			{src:"images/FlatheadScrewdriver0049.png", id:"FlatheadScrewdriver0049"},
			{src:"images/FlatheadScrewdriver0050.png", id:"FlatheadScrewdriver0050"},
			{src:"images/FlatheadScrewdriver0051.png", id:"FlatheadScrewdriver0051"},
			{src:"images/FlatheadScrewdriver0052.png", id:"FlatheadScrewdriver0052"},
			{src:"images/FlatheadScrewdriver0053.png", id:"FlatheadScrewdriver0053"},
			{src:"images/FlatheadScrewdriver0054.png", id:"FlatheadScrewdriver0054"},
			{src:"images/FlatheadScrewdriver0055.png", id:"FlatheadScrewdriver0055"},
			{src:"images/FlatheadScrewdriver0056.png", id:"FlatheadScrewdriver0056"},
			{src:"images/FlatheadScrewdriver0057.png", id:"FlatheadScrewdriver0057"},
			{src:"images/FlatheadScrewdriver0058.png", id:"FlatheadScrewdriver0058"}
		];
		var hLoaded = function(event){
			switch (event.item.type){	
				case createjs.LoadQueue.IMAGE:
						images[event.item.id] = event.result;
					break;	
				case createjs.LoadQueue.JAVASCRIPT:
						document.body.appendChild(event.result);
					break;	
			}
		}
		var exportRoot;
		var onComplete = function(){
				exportRoot = new lib.slide1animation();	
				exportRoot.x = -90;
				exportRoot.y = -10;	
				slideContainer.addChild(exportRoot);
			}
		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", hLoaded);
		loader.addEventListener("complete", onComplete);		
		loader.loadManifest(manifest);
	}
	else if(id == 6)
	{
		manifest = [{src:"slide-6-animation.js", id:"animFile"},
					{src:"images/plier_close.png", id:"plier_close"},
					{src:"images/plier_open.png", id:"plier_open"},
					{src:"images/tweeser_close.png", id:"tweeser_close"},
					{src:"images/tweeser_open.png", id:"tweeser_open"}
		];
		var hLoaded = function(event){
			switch (event.item.type){	
				case createjs.LoadQueue.IMAGE:
						images[event.item.id] = event.result;
					break;	
				case createjs.LoadQueue.JAVASCRIPT:
						document.body.appendChild(event.result);
					break;	
			}
		}
		var exportRoot;
		var onComplete = function(){
				exportRoot = new lib.slide6animation();	
				exportRoot.x = 40;
				exportRoot.y = 30;
				slideContainer.addChild(exportRoot);
			}
		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", hLoaded);
		loader.addEventListener("complete", onComplete);		
		loader.loadManifest(manifest);
	}else if(id == 7)
	{		
		manifest = [{src:"slide-7-animation.js", id:"animFile"},
					{src:"images/knob.png", id:"knob"},
					{src:"images/knob_cover.png", id:"knob_cover"},
					{src:"images/knob3.jpg", id:"knob3"},
					{src:"images/knob4.jpg", id:"knob4"},
					{src:"images/knob5.jpg", id:"knob5"},
					{src:"images/knob6.jpg", id:"knob6"},
					{src:"images/display_over.png", id:"display_over"},
					{src:"images/port_over.png", id:"port_over"},
					{src:"images/rect_over.png", id:"rect_over"},
					{src:"images/knob_over.png", id:"knob_over"},
					{src:"images/multimeter.png", id:"multimeter"},
					{src:"images/screen_2.jpg", id:"screen_2"},
					{src:"images/screen_3.jpg", id:"screen_3"},
					{src:"images/screen_4.jpg", id:"screen_4"},
					{src:"images/screen_5.jpg", id:"screen_5"},
					{src:"images/screen_6.jpg", id:"screen_6"},
					{src:"images/screen_7.jpg", id:"screen_7"}
		];
		var hLoaded = function(event){
			switch (event.item.type){	
				case createjs.LoadQueue.IMAGE:
						images[event.item.id] = event.result;
					break;	
				case createjs.LoadQueue.JAVASCRIPT:
						document.body.appendChild(event.result);
					break;	
			}
		}
		var exportRoot;
		var textBox = getCJSElement("TEXTBOX",{titleId:"ID_s7_titleTxt",bodyId:"ID_s7_bodyTxt",x:190,y:37,width:240,height:303,div:"slide_7"});
		slideContainer.addChild(textBox);
		
		slideContainer.updateTextBox = function(_titleCompId,_bodyCompId)
		{
			textBox.setTitleId(_titleCompId);
			textBox.setBodyId(_bodyCompId);			
		}
		var onComplete = function(){
				exportRoot = new lib.slide7animation(slideContainer);
				exportRoot.x = -70;
				exportRoot.y = -20;
				exportRoot.instance.gotoAndStop(1);
				slideContainer.addChild(exportRoot);
			}
		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", hLoaded);
		loader.addEventListener("complete", onComplete);		
		loader.loadManifest(manifest);
	}
	
	
	
});


