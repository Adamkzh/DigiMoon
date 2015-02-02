// initialize canvas size
var canvas = document.getElementById( "WebMoon" );

var scaleLevel = 5;
var scaleStep = 0.3;
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
		scaleLevel -= scaleStep;
	}
	else if (scale < 0 && scaleLevel < 40){
		scaleLevel += scaleStep;
	};

	DigiMoon.camera.position.set(0,0,scaleLevel);
	DigiMoon.draw();
	console.log(scaleLevel);

};

function MouseRota(event){
	var e = event || window.event;
	var startX = e.clientX;
	var startY = e.clientY;
	
	if (document.addEventListener){
		document.addEventListener("mousemove", moveHandler, true);
		document.addEventListener("mouseup", upHandler, true);
	};

	if (e.stopPropagation) e.stopPropagation();

	function moveHandler(event){
		var e = event || window.event;
		
		deltaX = e.clientX - startX;
		deltaY = e.clientY - startY;
		
		console.log("DeltaX: " + deltaX);
		console.log("DeltaY: "+ deltaY);
	};

	function upHandler(event){
		var e = event || window.event;
		
		if (document.removeEventListener){
			document.removeEventListener("mouseup", upHandler, true);
			document.removeEventListener("mousemove",moveHandler, true);
		};
	};
}
