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
    p.nominalBounds = new createjs.Rectangle(5,2,460,379.7);


// symbols:
    (_6_2_2b_screen_01 = function() {
        this.initialize(img._6_2_2b_screen_01);
    }).prototype = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,180,159);


    (_6_2_2b_screen_02 = function() {
        this.initialize(img._6_2_2b_screen_02);
    }).prototype = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,174,137);


    (_6_2_2bc = function() {
        this.initialize(img._6_2_2bc);
    }).prototype = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,557,422);


    (blushades = function() {
        this.initialize(img.blushades);
    }).prototype = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,213,109);


    (butten1f7 = function() {
        this.initialize(img.butten1f7);
    }).prototype = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,59,58);


    (buttenclickedf7 = function() {
        this.initialize(img.buttenclickedf7);
    }).prototype = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,60,59);


    (fn1 = function() {
        this.initialize(img.fn1);
    }).prototype = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,58,58);


    (fn2click = function() {
        this.initialize(img.fn2click);
    }).prototype = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,58,55);


    (left_hand = function() {
        this.initialize(img.left_hand);
    }).prototype = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,131,112);


    (right_hand = function() {
        this.initialize(img.right_hand);
    }).prototype = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,143,112);


    (Symbol2 = function() {
        this.initialize();

        // Layer 1
        this.instance = new right_hand();
        this.instance.setTransform(-71.4,-55.9);

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(-71.4,-55.9,143,112);


    (Symbol1 = function() {
        this.initialize();

        // Layer 1
        this.instance_1 = new left_hand();
        this.instance_1.setTransform(-65.4,-55.9);

        this.addChild(this.instance_1);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(-65.4,-55.9,131,112);


    (Photograph3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{},true);

        // blue_bg
        this.shape = new createjs.Shape();
        this.shape.graphics.f("#F0F5F9").s().p("EAA0gg9MAAABB7IhnAAMAAAhB7IBnAA").cp();
        this.shape.setTransform(10.9,211);

        this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(142));

        // right_hand_new
        this.instance_2 = new Symbol2();
        this.instance_2.setTransform(476.2,267.2);

        this.timeline.addTween(createjs.Tween.get(this.instance_2).wait(30).to({x:440.5,y:300.4},6).wait(15).to({x:444.2,y:299.2},0).to({x:476.2,y:267.2},13).wait(39).to({x:440.6,y:301.6},6).wait(18).to({x:434.6,y:299.1},0).to({x:476.2,y:267.2},13).wait(2));

        // left_hand_new
        this.instance_3 = new Symbol1();
        this.instance_3.setTransform(424.5,364.4);

        this.timeline.addTween(createjs.Tween.get(this.instance_3).wait(23).to({x:373.3,y:382.7},5).wait(26).to({x:381.5,y:380.4},0).to({x:424.5,y:364.4},10).wait(32).to({x:376.6,y:383},5).wait(29).to({x:383.9},0).to({x:424.5,y:364.4},10).wait(2));

        // f7_new
        this.instance_4 = new butten1f7();
        this.instance_4.setTransform(333,257.9);

        this.instance_5 = new buttenclickedf7();
        this.instance_5.setTransform(332.1,258.6);

        this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4},{t:this.instance_5}]},36).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_4}]},43).to({state:[{t:this.instance_4},{t:this.instance_5}]},15).to({state:[{t:this.instance_4}]},18).wait(15));

        // function key_new
        this.instance_6 = new fn1();
        this.instance_6.setTransform(280.5,318.1);

        this.instance_7 = new fn2click();
        this.instance_7.setTransform(280.6,317.2);

        this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6},{t:this.instance_7}]},28).to({state:[{t:this.instance_6}]},23).to({state:[{t:this.instance_6}]},43).to({state:[{t:this.instance_6},{t:this.instance_7}]},7).to({state:[{t:this.instance_6}]},26).wait(15));

        // Layer 4
        this.shape_1 = new createjs.Shape();
        this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("Ak8BeQhygPg1AnAk3BeQFMAgA+htQBbiGE2AB");
        this.shape_1.setTransform(315,244.3);

        this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(142));

        // Layer 8
        this.instance_8 = new _6_2_2b_screen_01();
        this.instance_8.setTransform(31.1,112);

        this.instance_9 = new _6_2_2b_screen_02();
        this.instance_9.setTransform(318,50);

        this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},51).to({state:[{t:this.instance_8}]},76).wait(15));

        // blueshade
        this.instance_10 = new blushades();
        this.instance_10.setTransform(141.8,263.1);

        this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.instance_10}]}).wait(142));

        // Layer 1
        this.instance_11 = new _6_2_2bc();

        this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.instance_11}]}).wait(142));

    }).prototype = p = new createjs.MovieClip();
    p.nominalBounds = new createjs.Rectangle(0,0,557,422);


    (Main = function() {
        this.initialize();

        // animation
        this.animation = new Photograph3();
        this.animation.setTransform(235.7,210.1,0.813,0.813,0,0,0,278.5,211);

        this.addChild(this.animation);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(5,2,460,379.7);

    var main = new Main();
    slide.addChild(main);

});

(slideViewDidLoad = function(slideContainer){

   var manifest = [
        {src:"images/_6_2_2b_screen_01.png", id:"_6_2_2b_screen_01"},
        {src:"images/_6_2_2b_screen_02.png", id:"_6_2_2b_screen_02"},
        {src:"images/_6_2_2bc.jpg", id:"_6_2_2bc"},
        {src:"images/blushades.png", id:"blushades"},
        {src:"images/butten1f7.png", id:"butten1f7"},
        {src:"images/buttenclickedf7.png", id:"buttenclickedf7"},
        {src:"images/fn1.png", id:"fn1"},
        {src:"images/fn2click.png", id:"fn2click"},
        {src:"images/left_hand.png", id:"left_hand"},
        {src:"images/right_hand.png", id:"right_hand"}
    ];
    loadImages(manifest,function(img){animationloaded(img,slideContainer)});
});