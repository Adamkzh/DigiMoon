// initialize canvas size
var canvas = document.getElementById( "WebMoon" );

var scaleLevel = 5;

var DigiMoon = new WebGLWin( canvas );

if( canvas.addEventListener ){
	//IE9, Chrome, Safari, Opera
	canvas.addEventListener("mousewheel",
							MouseWheelHandler,
							false);
	// Firefox
	canvas.addEventListener("DOMMouseScroll",
							MouseWheelHandler,
							false);
}
// IE 6/7/8
//else canvas.attachEvent("onmousewheel", MouseWheelHandler);

window.onload = function() {
    
    
    PLYFile = './CHE1Mesh4V2.ply';
    //loader = new THREE.PLYLoader();
    
    //geometry = loader.load(PLYFile, function( event ){ return event; });
    //alert(geometry);
    
    //alert(DigiMoon.geometry.id);
    //DigiMoon.loadPLY(PLYFile);
    //alert(DigiMoon.geometry.id);
    
    DigiMoon.draw();
    
};

function MouseWheelHandler(event){
	
	var e = event || window.event;
	
	var scale = e.wheelDelta || e.detail;
	if (scale >= 0 && scaleLevel >= 1 ){
		scaleLevel -=0.3;
	}
	else if (scale < 0 && scaleLevel < 40){
		scaleLevel +=0.3;
	};

	DigiMoon.camera.position.set(0,0,scaleLevel);
	DigiMoon.draw();
	console.log(scaleLevel);

};
