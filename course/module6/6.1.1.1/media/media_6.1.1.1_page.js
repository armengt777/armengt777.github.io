loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(animationloaded = function(img,slide){

var p; // shortcut to reference prototypes
// stage content:
(classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new Main();

	this.addChild(this.instance);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,0,0);


// symbols:
(paper_01 = function() {
	this.initialize(img.paper_01);
}).prototype = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,63,99);


(paper_02 = function() {
	this.initialize(img.paper_02);
}).prototype = new createjs.Bitmap();
p.nominalBounds = new createjs.Rectangle(0,0,130,100);


(file_01 = function() {
	this.initialize();

	// Layer 2
	this.instance = new paper_02();
	this.instance.setTransform(-18.4,-34.3);

	this.addChild(this.instance);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-18.4,-34.3,130,100);


(file = function() {
	this.initialize();

	// Layer 2
	this.instance_1 = new paper_01();
	this.instance_1.setTransform(-18.4,-34.3);

	this.addChild(this.instance_1);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-18.4,-34.3,63,99);


(Main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// screen2
	this.instance_2 = new file("synched",0);
	this.instance_2.setTransform(314.8,107.2,0.52,0.52,0,0,0,41.1,42.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(createjs.Tween.get(this.instance_2).wait(5).to({startPosition:0,_off:false},0).to({regX:41,regY:42.6,rotation:30,x:270.4,y:142.6,alpha:1},20,createjs.Ease.get(0.01)).to({regX:41.1,regY:42.9,scaleX:0.57,scaleY:0.57,rotation:59.8,x:268.4,y:188.9},25,createjs.Ease.get(0.01)).to({regX:41.2,regY:42.6,scaleX:0.42,scaleY:0.42,rotation:68,x:148.4,y:262.8},32,createjs.Ease.get(0.01)).wait(28));

	// screen1
	this.instance_3 = new file_01("synched",0);
	this.instance_3.setTransform(142.2,253.5,0.452,0.452,-24.2,0,0,41.2,42.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(createjs.Tween.get(this.instance_3).wait(5).to({startPosition:0,_off:false},0).to({x:204.2,y:212.5,alpha:1},16,createjs.Ease.get(0.01)).to({regX:41.3,rotation:-39.8,x:277,y:193.9},25,createjs.Ease.get(0.01)).to({regX:41.7,regY:42.6,rotation:-44.8,x:307.3,y:150.5},20,createjs.Ease.get(0.01)).to({regX:41.1,regY:42.8,rotation:-49.8,x:285.5,y:100.7},21).to({regY:42.5,scaleX:0.46,scaleY:0.45,rotation:0,skewX:3,skewY:-1.8,x:300.8,y:108.5},18,createjs.Ease.get(0.01)).wait(5));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,0,0);

	var main = new Main();
	slide.addChild(main);

});


(slideViewDidLoad = function(slideContainer){

	var manifest = [
		{src:"images/paper_01.jpg", id:"paper_01"},
		{src:"images/paper_02.png", id:"paper_02"}
	];
	loadImages(manifest,function(img){animationloaded(img,slideContainer)});
});

