var sketchProc = function(processing) {
	
    var h=200;
    var w=400;

    // this code is executed once when the program is started
    processing.setup = function() {

	// set up the size of the canvas (you probably don't want to change this!)
	processing.size(800, 600);



    // override draw function, by default it will be called 60 times per second
    processing.draw = function() {

    };
}


// boilerplate code --you probably want to ignore this
var canvas = document.getElementById("project-canvas");
var p = new Processing(canvas, sketchProc);
