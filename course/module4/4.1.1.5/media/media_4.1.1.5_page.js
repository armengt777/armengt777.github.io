loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad = function(slideContainer,id){
	var th = this;

	var currentImage,container,hitContainer;

	th.handleLoadComplete = function(img) {
		
	   container = new createjs.Container();
	    var bmp;
	    for(var i=0;i<31;i++)
	    {
			bmp = new createjs.Bitmap(img["image_"+i]);
			bmp.visible = false;
			bmp.cursor='pointer';
			container.addChild(bmp);
	    }
	    currentImage = bmp;
	    bmp.visible = true;

	    container.x = 0;
	    container.y = 29;
	    container.scaleX = container.scaleY = .81;
	    slideContainer.addChild(container,hitContainer);


	   	hitContainer = new createjs.Container();
	   	var hitShape = new createjs.Shape();
	   	hitShape.graphics.beginFill("#f36").drawRect(9,180,344,250);
	   	hitContainer.addChild(hitShape);
	   	hitContainer.cursor='pointer';
	   	hitContainer.alpha = 0.01;
	    slideContainer.addChild(hitContainer);

	    mediaStage.onMouseMove = function(evt){
	   		
	   		if((evt.stageX > (slideContainer.parent.x+9) && (evt.stageX < (slideContainer.parent.x+383)) && (evt.stageY > (slideContainer.parent.y+170))) && (evt.stageY < 425))
	   		{
	   			var round = Math.round((evt.stageY-172)/8);	 
	   			if(round<31)
	   			{  			
		   			currentImage.visible = false;
		   			currentImage = container.getChildAt(round);
		   			currentImage.visible = true;
				}	   		
	   		}
	   	};
	    update = true;
	}

	var manifest = [];
	for(var i=0;i<31;i++)
    {
		manifest[i] = {src:"./images/"+(i+2)+".jpg", id:"image_"+i}		
    }

    loadImages(manifest,th.handleLoadComplete)

});
