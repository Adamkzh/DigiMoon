WebGLWin = function ( canvas, camera, mesh, material ){
    this.canvas = canvas || { };
    
    this.scene = new THREE.Scene();
    
    this.camera = ( camera !== undefined ) ? camera :
                                 new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 
                                                                                                 0.1,  1000);
    this.camera.position.set (0, 0, 10);
    
    this.geometry = ( mesh !== undefined ) ? mesh : 
                                     new THREE.OctahedronGeometry( 1, 2);
                                     
    this.material = ( material !== undefined ) ? material : 
                                   new THREE.MeshBasicMaterial( {color : 0x00ff00});
    this.material.wirefreame = true;
}
