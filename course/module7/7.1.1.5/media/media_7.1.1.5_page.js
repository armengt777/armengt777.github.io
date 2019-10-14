loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad=function(slideContainer,id){

    var mainifest = [];
    if(id==1)
    {
        var hotspot_1 = {hotImage:"7_1_1_5_s1_hotspot_1.png", hotX:301.3, hotY:94.25,resultImage:"7_1_1_5_s1_popup_1.png",resultX:285,resultY:52,tbId:"ID_s01_cap01",tbX:6,tbY:300};
        var hotspot_2 = {hotImage:"7_1_1_5_s1_hotspot_2.png", hotX:301.3, hotY:107.95,resultImage:"7_1_1_5_s1_popup_2.png",resultX:285,resultY:51,tbId:"ID_s01_cap02",tbX:6,tbY:300};
        var hotspot_3 = {hotImage:"7_1_1_5_s1_hotspot_3.png", hotX:185.8, hotY:211.45,resultImage:"7_1_1_5_s1_popup_3.png",resultX:152,resultY:162,tbId:"ID_s01_cap03",tbX:6,tbY:300}
        mainifest = [hotspot_1,hotspot_2,hotspot_3];       
    }
    if(id==2)
    {
        var hotspot_1 = {hotImage:"7_1_1_5_s2_hotspot_1.png", hotX:29.5, hotY:162,resultImage:"7_1_1_5_s2_popup_1.png",resultX:29,resultY:100,tbId:"ID_s02_cap01",tbX:6,tbY:300};
        var hotspot_2 = {hotImage:"7_1_1_5_s2_hotspot_2.png", hotX:86.8, hotY:176.05,resultImage:"7_1_1_5_s2_popup_2.png",resultX:80,resultY:112,tbId:"ID_s02_cap02",tbX:6,tbY:300};
        var hotspot_3 = {hotImage:"7_1_1_5_s2_hotspot_3.png", hotX:125.25, hotY:161.4,resultImage:"7_1_1_5_s2_popup_3.png",resultX:97,resultY:106,tbId:"ID_s02_cap03",tbX:6,tbY:300};
        var hotspot_4 = {hotImage:"7_1_1_5_s2_hotspot_4.png", hotX:219.15, hotY:170.9,resultImage:"7_1_1_5_s2_popup_4.png",resultX:205,resultY:116,tbId:"ID_s02_cap04",tbX:6,tbY:300};
        var hotspot_5 = {hotImage:"7_1_1_5_s2_hotspot_5.png", hotX:267.35, hotY:172.55,resultImage:"7_1_1_5_s2_popup_5.png",resultX:257,resultY:113,tbId:"ID_s02_cap05",tbX:6,tbY:300};
        var hotspot_6 = {hotImage:"7_1_1_5_s2_hotspot_6.png", hotX:321.95, hotY:163.85,resultImage:"7_1_1_5_s2_popup_6.png",resultX:305,resultY:107,tbId:"ID_s02_cap06",tbX:6,tbY:300};
        var hotspot_7 = {hotImage:"7_1_1_5_s2_hotspot_7.png", hotX:321.95, hotY:179.4,resultImage:"7_1_1_5_s2_popup_7.png",resultX:314,resultY:123,tbId:"ID_s02_cap07",tbX:6,tbY:300};
        var hotspot_8 = {hotImage:"7_1_1_5_s2_hotspot_8.png", hotX:339.75, hotY:165.6,resultImage:"7_1_1_5_s2_popup_8.png",resultX:310,resultY:105,tbId:"ID_s02_cap08",tbX:6,tbY:300};
        var hotspot_9 = {hotImage:"7_1_1_5_s2_hotspot_9.png", hotX:379.65, hotY:201.15,resultImage:"7_1_1_5_s2_popup_9.png",resultX:380,resultY:157,tbId:"ID_s02_cap09",tbX:6,tbY:300};
        var hotspot_10 = {hotImage:"7_1_1_5_s2_hotspot_10.png", hotX:357.3, hotY:201.15,resultImage:"7_1_1_5_s2_popup_10.png",resultX:351,resultY:155,tbId:"ID_s02_cap10",tbX:6,tbY:300};
        var hotspot_11 = {hotImage:"7_1_1_5_s2_hotspot_11.png", hotX:308.8, hotY:198.35,resultImage:"7_1_1_5_s2_popup_11.png",resultX:291,resultY:158,tbId:"ID_s02_cap11",tbX:6,tbY:300};
        var hotspot_12 = {hotImage:"7_1_1_5_s2_hotspot_12.png", hotX:234.2, hotY:197,resultImage:"7_1_1_5_s2_popup_12.png",resultX:218,resultY:160,tbId:"ID_s02_cap12",tbX:6,tbY:300};
        var hotspot_13 = {hotImage:"7_1_1_5_s2_hotspot_13.png", hotX:187.2, hotY:197.05,resultImage:"7_1_1_5_s2_popup_13.png",resultX:184,resultY:159,tbId:"ID_s02_cap13",tbX:6,tbY:300};
        var hotspot_14 = {hotImage:"7_1_1_5_s2_hotspot_14.png", hotX:156.25, hotY:189.3,resultImage:"7_1_1_5_s2_popup_14.png",resultX:156,resultY:150,tbId:"ID_s02_cap14",tbX:6,tbY:300};
        var hotspot_15 = {hotImage:"7_1_1_5_s2_hotspot_15.png", hotX:133.45, hotY:189.3,resultImage:"7_1_1_5_s2_popup_15.png",resultX:121,resultY:150,tbId:"ID_s02_cap15",tbX:6,tbY:300};
        
        mainifest = [hotspot_1,hotspot_2,hotspot_3,hotspot_4,hotspot_5,hotspot_6,hotspot_7,hotspot_8,hotspot_9,hotspot_10,hotspot_11,hotspot_12,hotspot_13,hotspot_14,hotspot_15];
    }
	if(id==3)
	{
		var hotspot_1 = {hotImage:"7_1_1_5_s3_hotspot_1.png", hotX:257.8, hotY:173.75,resultImage:"7_1_1_5_s3_popup_1.png",resultX:241.1,resultY:122,tbId:"ID_s03_cap01",tbX:6,tbY:300};
		mainifest = [hotspot_1];
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