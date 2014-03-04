var sketchProc = function(processing) {
	
    
 	var x = 20;
        var y = 50;
	
	var speed = 7;
    

    // this code is executed once when the program is started
    processing.setup = function() {

	// set up the size of the canvas (you probably don't want to change this!)
	processing.size(800, 600);
    }

 
    // override draw function, by default it will be called 60 times per second
    processing.draw = function() {
  
  

   
	
	processing.background(255,255,255);
	processing.fill(30,30,30);

	processing.textSize(32);

	processing.text("Forever Alone Pong",300,300);

	processing.fill(50,50,50);  
	//Paddle
	
	processing.rect(processing.mouseX,processing.mouseY,30,90);
	



	// ball

 
      if (x === processing.mouseX) {
        speed = -7;
    }
	if (y === processing.mouseY) {
        speed = -7;
    }
	processing.rect(x,y,10,10);
 
	x = x + speed;  
     if (x > 800) {
        speed = -7;
    }


    };
   
}


// boilerplate code --you probably want to ignore this
var canvas = document.getElementById("project-canvas");
var p = new Processing(canvas, sketchProc);
