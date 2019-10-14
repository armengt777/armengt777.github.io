loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad=function(slideContainer,id){

    var mainifest = [];
    if(id==1)
    {
        var hotspot_1 = {hotImage:"7.1.1.1A1a.png", hotX:308.5, hotY:105.5,resultImage:"popup_s01_hot01.png",resultX:308.45,resultY:60.00,tbId:"ID_s01_cap01",tbX:6,tbY:280.3};
        var hotspot_2 = {hotImage:"7.1.1.1A1b.png", hotX:331.8, hotY:105.5,resultImage:"popup_s01_hot02.png",resultX:308.45,resultY:60.00,tbId:"ID_s01_cap02",tbX:6,tbY:280.3};
        var hotspot_3 = {hotImage:"7.1.1.1A1c.png", hotX:355.95, hotY:105.5,resultImage:"popup_s01_hot03.png",resultX:308.45,resultY:60.00,tbId:"ID_s01_cap03",tbX:6,tbY:280.3};  
        mainifest = [hotspot_1,hotspot_2,hotspot_3];       
    }
	if(id==2)
    {
        var hotspot_1 = {hotImage:"s2hotspot01.png", hotX:35.9, hotY:126.1,resultImage:"popup_s02_hot01.png",resultX:44,resultY:114,tbId:"ID_s02_cap01",tbX:6,tbY:280.3};
        var hotspot_2 = {hotImage:"s2hotspot02.png", hotX:318, hotY:134,resultImage:"popup_s02_hot02.png",resultX:300,resultY:100,tbId:"ID_s02_cap02",tbX:6,tbY:280.3};
		var hotspot_3 = {hotImage:"s2hotspot03.png", hotX:345.05, hotY:134.7,resultImage:"popup_s02_hot03.png",resultX:240,resultY:108,tbId:"ID_s02_cap03",tbX:6,tbY:280.3};
        mainifest = [hotspot_1,hotspot_2,hotspot_3];
    }
	if(id==4)
	{
		var hotspot_1 = {hotImage:"s4hotspot01.png", hotX:11.7, hotY:131.6,resultImage:"popup_s04_hot01.png",resultX:14.5,resultY:83,tbId:"ID_s04_cap01",tbX:6,tbY:280.3};
        var hotspot_2 = {hotImage:"s4hotspot02.png", hotX:37.5, hotY:126.6,resultImage:"popup_s04_hot02.png",resultX:42,resultY:83,tbId:"ID_s04_cap02",tbX:6,tbY:280.3};
		var hotspot_3 = {hotImage:"s4hotspot03.png", hotX:74.5, hotY:131.2,resultImage:"popup_s04_hot03.png",resultX:61,resultY:83,tbId:"ID_s04_cap03",tbX:6,tbY:280.3};
		var hotspot_4 = {hotImage:"s4hotspot04.png", hotX:103.7, hotY:133.3,resultImage:"popup_s04_hot04.png",resultX:98,resultY:82,tbId:"ID_s04_cap04",tbX:6,tbY:280.3};
		var hotspot_5 = {hotImage:"s4hotspot05.png", hotX:124.5, hotY:133.3,resultImage:"popup_s04_hot05.png",resultX:118,resultY:82,tbId:"ID_s04_cap05",tbX:6,tbY:280.3};
		var hotspot_6 = {hotImage:"s4hotspot06.png", hotX:146.5, hotY:137.8,resultImage:"popup_s04_hot06.png",resultX:136,resultY:82,tbId:"ID_s04_cap06",tbX:6,tbY:280.3};
		var hotspot_7 = {hotImage:"s4hotspot07.png", hotX:159.55, hotY:142.4,resultImage:"popup_s04_hot07.png",resultX:152,resultY:108,tbId:"ID_s04_cap07",tbX:6,tbY:280.3};
		var hotspot_8 = {hotImage:"s4hotspot08.png", hotX:180.85, hotY:142.4,resultImage:"popup_s04_hot08.png",resultX:175,resultY:108,tbId:"ID_s04_cap08",tbX:6,tbY:280.3};
		var hotspot_9 = {hotImage:"s4hotspot09.png", hotX:199, hotY:133.55,resultImage:"popup_s04_hot09.png",resultX:207,resultY:97,tbId:"ID_s04_cap09",tbX:6,tbY:280.3};
		var hotspot_10 = {hotImage:"s4hotspot10.png", hotX:299.75, hotY:126.8,resultImage:"popup_s04_hot10.png",resultX:265,resultY:77,tbId:"ID_s04_cap10",tbX:6,tbY:280.3};
		
        mainifest = [hotspot_1,hotspot_2,hotspot_3,hotspot_4,hotspot_5,hotspot_6,hotspot_7,hotspot_8,hotspot_9,hotspot_10];
	}
	if(id==5)
	{
		var hotspot_1 = {hotImage:"s5hotspot01.png", hotX:23.6, hotY:129,resultImage:"popup_s05_hot011.png",resultX:16,resultY:86,tbId:"ID_s05_cap01",tbX:6,tbY:280.3};
		var hotspot_2 = {hotImage:"s5hotspot02.png", hotX:105.35, hotY:136,resultImage:"popup_s05_hot02.png",resultX:175,resultY:98,tbId:"ID_s05_cap02",tbX:6,tbY:280.3};
		var hotspot_3 = {hotImage:"s5hotspot03.png", hotX:319.85, hotY:116,resultImage:"popup_s05_hot03.png",resultX:308,resultY:75,tbId:"ID_s05_cap03",tbX:6,tbY:280.3};
		var hotspot_4 = {hotImage:"s5hotspot04.png", hotX:391.3, hotY:139,resultImage:"popup_s05_hot04.png",resultX:363,resultY:103,tbId:"ID_s05_cap04",tbX:6,tbY:280.3};
		mainifest = [hotspot_1,hotspot_2,hotspot_3,hotspot_4];
	}
	if(id==6)
	{
		var hotspot_1 = {hotImage:"s6hotspot01.png", hotX:144.15, hotY:136.6,resultImage:"popup_s06_hot01.png",resultX:99,resultY:120,tbId:"ID_s06_cap01",tbX:6,tbY:280.3};
		var hotspot_2 = {hotImage:"s6hotspot02.png", hotX:266.65, hotY:143.85,resultImage:"popup_s06_hot02.png",resultX:245.55,resultY:122,tbId:"ID_s06_cap02",tbX:6,tbY:280.3};
		var hotspot_3 = {hotImage:"s6hotspot03.png", hotX:331.9, hotY:153.75,resultImage:"popup_s06_hot03.png",resultX:323,resultY:133,tbId:"ID_s06_cap03",tbX:6,tbY:280.3};
		var hotspot_4 = {hotImage:"s6hotspot04.png", hotX:363.25, hotY:137.7,resultImage:"popup_s06_hot04.png",resultX:348,resultY:123,tbId:"ID_s06_cap04",tbX:6,tbY:280.3};
		mainifest = [hotspot_1,hotspot_4,hotspot_3,hotspot_2];
	}
	if(id==7)
	{
		var hotspot_1 = {hotImage:"s7hotspot01.png", hotX:79.65, hotY:199.1,resultImage:"popup_s07_hot01.png",resultX:74.6,resultY:143,tbId:"ID_s07_cap01",tbX:6,tbY:280.3};
		var hotspot_2 = {hotImage:"s7hotspot02.png", hotX:157, hotY:60,resultImage:"popup_s07_hot02.png",resultX:127,resultY:30,tbId:"ID_s07_cap02",tbX:6,tbY:280.3};
		var hotspot_3 = {hotImage:"s7hotspot03.png", hotX:179.45, hotY:76,resultImage:"popup_s07_hot03.png",resultX:156,resultY:45,tbId:"ID_s07_cap03",tbX:6,tbY:280.3};
		var hotspot_4 = {hotImage:"s7hotspot04.png", hotX:209.05, hotY:90.3,resultImage:"popup_s07_hot04.png",resultX:187,resultY:57,tbId:"ID_s07_cap04",tbX:6,tbY:280.3};
		mainifest = [hotspot_1,hotspot_2,hotspot_3,hotspot_4];
	}
    var popup = new Popup(mainifest,slideContainer,id);
});
(Popup = function(mainifest,slideContainer,id){
    var self = this;

    self.showTextBox = function(ev,hSpot)
    {
        $("#popup_"+id).remove();
        $("#textbox_popup").remove();
        var popupDiv = document.createElement("div");
        popupDiv.id = "popup_"+id;
        popupDiv.style.cssText = "position:absolute;top:0px;left:0px;visibility:hidden;"
        $("#slide_"+id).append(popupDiv);
        var canvasDom = new createjs.DOMElement(popupDiv);
        
        $("#popup_"+id).append('<canvas id="canvas_'+id+'" width="440" height="380" style="margin-top:20px;background-color:rgba(255,255,255,.5);"></canvas>');

        var canvasId = document.getElementById("canvas_"+id);
        var childStage = new createjs.Stage(canvasId);
        childStage.enableMouseOver();
        //Load textbox
        var textBox = getCJSElement("TEXTBOX",{x:hSpot.tbX,y:hSpot.tbY,div:"popup_"+id,bodyId:hSpot.tbId,divId:"textbox_popup",height:93,width:430});
        childStage.addChild(textBox);        

        //load result image
        var rImage = new createjs.Bitmap(ev.target);
        rImage.x = hSpot.resultX;
        rImage.y = hSpot.resultY;
        childStage.addChild(rImage);
        rImage.cursor = "pointer";
        rImage.onClick = function(){
            $("#popup_"+id).remove();
            $("#textbox_popup").remove();
            update = true;
        };
        childStage.update();
        slideContainer.addChild(canvasDom);
        update = true;        
    }

    self.hotImageClicked = function(ev){
        var hSpot = ev.target.hotspot;
        var resultImage = new Image();
        resultImage.src = "images/"+hSpot.resultImage;
        resultImage.onload = function(ev)
        {
            self.showTextBox(ev,hSpot);           
        }        
        update = true;
    }
    self.hotImageLoaded = function(ev,hSpot){
        var container = new createjs.Container();
        container.x = hSpot.hotX;
        container.y = hSpot.hotY;

        var hotImage = new createjs.Bitmap(ev.target);  
       
        var hotShape = new createjs.Shape();
        hotShape.graphics.beginFill("#fff").drawRect(0,0,ev.target.width,ev.target.height);
        hotShape.alpha = 0.01;
        container.addChild(hotImage,hotShape);
        container.cursor = "pointer";
        slideContainer.addChild(container);

        container.hotspot = hSpot;

        container.addEventListener("mousedown",self.hotImageClicked);
        if(slideContainer.getStage()) slideContainer.getStage().update();        
    }
    var cImage = function(hSpot)
    {
        var hImageElement = new Image();
        hImageElement.src = "images/"+hSpot.hotImage;
        hImageElement.onload = function(ev){ self.hotImageLoaded(ev,hSpot);  }

    }
    var hotspot;
    for (var i = 0; i <mainifest.length; i++) {
        hotspot = new cImage(mainifest[i]);        
    };
});