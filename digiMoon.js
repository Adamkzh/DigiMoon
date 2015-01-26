window.onload = function() {
    // initialize canvas size
    var canvas = document.getElementById( "WebMoon" );
    //canvas.width  = window.innerWidth;
    //canvas.height = window.innerHeight;
  
    var DigiMoon = new WebGLWin( canvas );
     //DigiMoon.canvas.width = window.innerWidth;
	//DigiMoon.canvas.height = window.innerHeight; 
    
    DigiMoon.draw();
    
}
