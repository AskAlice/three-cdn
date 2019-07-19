// Global imports -
import * as THREE from 'three';
import TWEEN from 'tween.js';

// Local imports -
// Components
import Renderer from './components/renderer';
import Camera from './components/camera';
import Light from './components/light';
import Controls from './components/controls';

// Helpers
import Geometry from './helpers/geometry';
import Stats from './helpers/stats';

// Model
import Texture from './model/texture';
import Model from './model/model';

// Managers
import Interaction from './managers/interaction';
import DatGUI from './managers/datGUI';

// data
import Config from './../data/config';
// -- End of imports

// This class instantiates and ties all of the components together, starts the loading process and renders the main loop
export default class Main {
  constructor(container) {
    // Set container property to container element
    this.container = container;

    // Start Three clock
    this.clock = new THREE.Clock();
    this.t = 0;
    this.line = null;
    this.count = 0;
    this.curve = null;
    this.particles= [];
    this.traffic = new THREE.Group();
    this.starsGeometry = null;
    this.axis = new THREE.Vector3( );
    // Main scene creation
    this.scene = new THREE.Scene();
    //this.scene.fog = new THREE.FogExp2(Config.fog.color, Config.fog.near);

    // Get Device Pixel Ratio first for retina
    if(window.devicePixelRatio) {
      Config.dpr = window.devicePixelRatio;
    }

    // Main renderer constructor
    this.renderer = new Renderer(this.scene, container);

    // Components instantiations
    this.camera = new Camera(this.renderer.threeRenderer);

    console.log(this.camera.threeCamera.position)
    this.controls = new Controls(this.camera.threeCamera, container);
    this.light = new Light(this.scene);

    // Create and place lights in scene
    const lights = ['ambient', 'directional', 'point', 'hemi'];
    lights.forEach((light) => this.light.place(light));
    // Create and place geo in scene



    // // Set up rStats if dev environment
    // if(Config.isDev && Config.isShowingStats) {
    //   this.stats = new Stats(this.renderer);
    //   this.stats.setUp();
    // }
    this.stats = new Stats(this.renderer);
    this.stats.setUp();
    // Instantiate texture class
    this.texture = new Texture();

    // Start loading the textures and then go on to load the model after the texture Promises have resolved
    this.texture.load().then(() => {
      this.manager = new THREE.LoadingManager();

      // Textures loaded, load model
      this.model = new Model(this.scene, this.manager, this.texture.textures);
      this.model.load();
      this.geometry = new Geometry(this.scene, this.texture.textures);
      this.geometry.make('plane')(130, 130, 1, 1);
      this.geometry.place([0, 10, 0], [Math.PI / 2, 0, 0]);
      this.geometry.make('map')(150, 150, 1, 1);
      this.geometry.place([0, -15, 0], [-Math.PI / 2, 0, 0]);
      this.geometry.make('cube')(15,15,15);
      this.geometry.place([0, 30, 0], [Math.PI / 36, Math.PI / 4,0]);
      var nodeGeometry = new THREE.CylinderGeometry( 2, 2, 1.5, 32 );	
      var nodeMaterial = new THREE.MeshToonMaterial( {
        transparent: true,
        flatShading: true,
        opacity: 1,
        color: 1570734,
        emissive: 0,
        specular: 0,
        shininess: 0
      } );
      var node1 = new THREE.Mesh( nodeGeometry, nodeMaterial );
    
      node1.receiveShadows = true;
      node1.castShadows = true;
      node1.rotateY(  Math.PI / 4)
    
      var node2 = new THREE.Mesh( nodeGeometry, nodeMaterial );
      node2.position.y = 1.75;
      node2.receiveShadows = true;
      node2.castShadows = true;
      node2.rotateY(  Math.PI / 4)
      // cube.rotateX(  Math.PI / 12)
      // cube.rotateZ(  Math.PI / 12)
      var node = new THREE.Group();
      node.add(node1);
      node.add(node2);
      node.position.y = this.geometry.plane.position.y+1.1;
      node.position.x = 45;
      node.position.z = 50;
      this.scene.add(node);
    
      var secondNode = node.clone();
      secondNode.position.x = -13;
      secondNode.position.z = -2.5;
      this.scene.add(secondNode);
      var curve = new THREE.CatmullRomCurve3( [
      new THREE.Vector3(this.geometry.cube.position.x,this.geometry.cube.position.y-7.5,this.geometry.cube.position.z),
      new THREE.Vector3(this.geometry.cube.position.x,this.geometry.cube.position.y-14,this.geometry.cube.position.z),
      new THREE.Vector3(node.position.x, node.position.y+4, node.position.z),
      node.position,
      //new THREE.Vector3(node.position.x, node.position.y-8, node.position.z),
      new THREE.Vector3(node.position.x, this.geometry.map.position.y, node.position.z)
      ]);
      this.curve = curve;
      var points = curve.getPoints( 30 );
      var lg = new THREE.BufferGeometry().setFromPoints( points );
      var lm = new THREE.LineBasicMaterial( { color: 0x0000ff } );
      this.line = new THREE.Line( lg, lm );
    //  this.scene.add( this.line );

        this.scene.add(this.traffic);

      // onProgress callback
      this.manager.onProgress = (item, loaded, total) => {
        console.log(`${item}: ${loaded} ${total}`);
      };

      // All loaders done now
      this.manager.onLoad = () => {
        // Set up interaction manager with the app now that the model is finished loading
        new Interaction(this.renderer.threeRenderer, this.scene, this.camera.threeCamera, this.controls.threeControls);

        // Add dat.GUI controls if dev
        if(Config.isDev) {
      //    new DatGUI(this, this.model.obj);
        }
        new DatGUI(this, this.model.obj);

        // Everything is now fully loaded
        Config.isLoaded = true;
        this.container.querySelector('#loading').style.display = 'none';
      };
    });

    // Start render which does not wait for model fully loaded
    this.render();
  }

  render() {
    // Render rStats if Dev
    if(Config.isDev && Config.isShowingStats) {
      Stats.start();
    }

    // Call render function and pass in created scene and camera
    this.renderer.render(this.scene, this.camera.threeCamera);

    // rStats has finished determining render call now
    if(Config.isDev && Config.isShowingStats) {
      Stats.end();
    }

    // Delta time is sometimes needed for certain updates
    //const delta = this.clock.getDelta();

    // Call any vendor or module frame updates here
    TWEEN.update();
    this.controls.threeControls.update();

    // RAF
    if(this.curve !== null){
   //   console.log(this.traffic);

   // console.log(this.traffic.children);
   var starsMaterial = new THREE.PointsMaterial( { color: 0x17e7ae } );
   let starsGeometry = new THREE.Geometry();
   let star = new THREE.Vector3(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1);
   starsGeometry.vertices.push(star);
   var pts = new THREE.Points( starsGeometry, starsMaterial );
   pts.t = 0;
   //console.log('wat');
   //console.log(pts);
   this.traffic.add(pts);
   this.traffic.updateMatrix();
   let me= this;
    // set the quaternion
    this.traffic.children.forEach(function(p){
      (p.t <= 0.995) ? p.t+=0.005 : me.traffic.remove(p);
      var up = new THREE.Vector3( 0, 1, 0 );
      var pp = me.curve.getUtoTmapping(p.t)
      var pos =  me.curve.getPoint(pp);
      var tangent = me.curve.getTangent(p.t).normalize();
     // console.log(tangent);
      let axis = new THREE.Vector3();
      axis.crossVectors( up, tangent ).normalize();
      var radians = Math.acos( up.dot( tangent ) );
      p.quaternion.setFromAxisAngle( axis, radians );
      p.position.x = pos.x;
      p.position.y = pos.y;
      p.position.z =  pos.z;
      p.updateMatrix();
    })
    me.traffic = this.traffic
   // .position.set(pos.x, pos.y, pos.z);

    }
    requestAnimationFrame(this.render.bind(this)); // Bind the main class instead of window object
  }
}
