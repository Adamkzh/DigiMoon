WebGLWin = function ( canvas, camera, geometry, material ){
    
    this.canvas = canvas || { };
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    
    this.scene = new THREE.Scene();
    
    this.camera = ( camera !== undefined ) ? camera :
                                 new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 
                                                                                                 0.1,  1000);
    this.camera.position.set ( 0, 0, 5 );
    
    this.geometry = ( geometry !== undefined ) ? geometry : 
                                     new THREE.OctahedronGeometry( 1, 2 );
                                     
    this.material = ( material !== undefined ) ? material : 
                                    new THREE.MeshBasicMaterial( {color : 0x00ff00} );
    this.material.wireframe = true;
    
   this.models =  new THREE.Mesh( this.geometry, this.material );
   
    this.scene.add( this.models );
    
    this.renderer = new THREE.WebGLRenderer( {canvas: canvas} ) ;
}

WebGLWin.prototype = {
    
    constructor : WebGLWin, 
    
    draw : function() {
       this.renderer.render( this.scene, this.camera );
   },
       
}
