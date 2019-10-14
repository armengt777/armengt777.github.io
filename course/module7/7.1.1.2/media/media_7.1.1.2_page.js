loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad=function(slideContainer,id){

    var mainifest = [];
    if(id==1)
    {
        var hotspot_1 = {hotImage:"hotspot_s1_01.png", hotX:78.15, hotY:45.85,resultImage:"popup_s01_hot01.png",resultX:38.75,resultY:36.55,tbId:"ID_s01_cap01",tbX:6,tbY:280.3};
        var hotspot_2 = {hotImage:"hotspot_s1_02.png", hotX:171.8, hotY:181.45,resultImage:"popup_s01_hot02.png",resultX:166.35,resultY:172.05,tbId:"ID_s01_cap02",tbX:6,tbY:280.3};
        var hotspot_3 = {hotImage:"hotspot_s1_03.png", hotX:334.25, hotY:205.35,resultImage:"popup_s01_hot03.png",resultX:302.5,resultY:167,tbId:"ID_s01_cap03",tbX:6,tbY:280.3};
        var hotspot_4 = {hotImage:"hotspot_s1_04.png", hotX:135.35, hotY:49.1,resultImage:"popup_s01_hot04.png",resultX:110.05,resultY:27.5,tbId:"ID_s01_cap04",tbX:6,tbY:280.3};
        var hotspot_5 = {hotImage:"hotspot_s1_05.png", hotX:230.15, hotY:49.6,resultImage:"popup_s01_hot05.png",resultX:186.55,resultY:32.7,tbId:"ID_s01_cap05",tbX:6,tbY:280.3};
        
        mainifest = [hotspot_1,hotspot_5,hotspot_4,hotspot_2,hotspot_3];       
    }
    else
    {
        var hotspot_1 = {hotImage:"hotspot_s2_01.png", hotX:67, hotY:144.75,resultImage:"popup_s02_hot01.png",resultX:112.35,resultY:130.5,tbId:"ID_s02_cap01",tbX:6,tbY:280.3};
        var hotspot_2 = {hotImage:"hotspot_s2_02.png", hotX:134.65, hotY:151.5,resultImage:"popup_s02_hot02.png",resultX:113.25,resultY:129.5,tbId:"ID_s02_cap02",tbX:6,tbY:280.3};
        var hotspot_3 = {hotImage:"hotspot_s2_03.png", hotX:161.95, hotY:151.5,resultImage:"popup_s02_hot03.png",resultX:140.3,resultY:130.5,tbId:"ID_s02_cap03",tbX:6,tbY:280.3};
        var hotspot_4 = {hotImage:"hotspot_s2_04.png", hotX:187.4, hotY:151.5,resultImage:"popup_s02_hot04.png",resultX:167.4,resultY:129.5,tbId:"ID_s02_cap04",tbX:6,tbY:280.3};
        var hotspot_5 = {hotImage:"hotspot_s2_05.png", hotX:225.6, hotY:151.9,resultImage:"popup_s02_hot05.png",resultX:204.95,resultY:129.5,tbId:"ID_s02_cap05",tbX:6,tbY:280.3};
        var hotspot_6 = {hotImage:"hotspot_s2_06.png", hotX:251.7, hotY:151.5,resultImage:"popup_s02_hot06.png",resultX:232,resultY:129.5,tbId:"ID_s02_cap06",tbX:6,tbY:280.3};
        var hotspot_7 = {hotImage:"hotspot_s2_07.png", hotX:276.45, hotY:151.5,resultImage:"popup_s02_hot07.png",resultX:255.55,resultY:130.5,tbId:"ID_s02_cap07",tbX:6,tbY:280.3};
        var hotspot_8 = {hotImage:"hotspot_s2_08.png", hotX:301, hotY:151.5,resultImage:"popup_s02_hot08.png",resultX:279.15,resultY:130.5,tbId:"ID_s02_cap08",tbX:6,tbY:280.3};
        
        mainifest = [hotspot_1,hotspot_2,hotspot_3,hotspot_4,hotspot_5,hotspot_6,hotspot_7,hotspot_8];
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