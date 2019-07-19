import * as THREE from 'three';

import Material from './material';

import Config from '../../data/config';

// This helper class can be used to create and then place geometry in the scene
export default class Geometry {
  constructor(scene, textures) {
    this.scene = scene;
    this.geo = null;
    this.type = null;
    this.cube = null;
    this.plane = null;
    this.map = null;
    this.textures = textures;
  }

  make(type) {
    if(type === 'plane') {
      this.type = type;
      return (width, height, widthSegments = 1, heightSegments = 1) => {
        this.geo = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
      };
    }
    if(type === 'map') {
      this.type = type;
      return (width, height, widthSegments = 1, heightSegments = 1) => {
        this.geo = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
      };
    }
    if(type === 'sphere') {
      this.type = type;
      return (radius, widthSegments = 32, heightSegments = 32) => {
        this.geo = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
      };
    }
    if(type === 'cube') {
      this.type = type;
      return (width, height,depth) => {
        this.geo = new THREE.BoxGeometry( width,height, depth);
      };
    }
    if(type === 'node'){
      this.type = type;
      return ( radius ) => {
        this.geo = new THREE.CylinderGeometry( radius, radius, 4, 32 );
      };
    }
  }

  place(position, rotation,texture) {
    console.log(texture);
    let material = new Material(0x000000,0.3).standard;
    if(this.type == 'plane'){
      material = new Material(0x000000,0.6).plane;
     // material = new Material(0xffffff,1).plane;
   }
   if(this.type == 'cube'){
    material = new Material(0x17f7ae,0.3).standard;
  }
  if(this.type == 'node'){
    material = new Material(0x17a7ae,0.3).standard;
  }
  if(this.type == 'map'){
    material = new Material(0x000000,null).map;
    material.map = this.textures.map;
  }
  const mesh = new THREE.Mesh(this.geo, material);
switch(this.type){
  case 'cube': this.cube = mesh; break;
  case 'map': this.map = mesh; break;
  case 'plane': this.plane = mesh; break;
}
  console.log(mesh);
    // Use ES6 spread to set position and rotation from passed in array
    mesh.position.set(...position);
    mesh.rotation.set(...rotation);

    if(Config.shadow.enabled) {
      mesh.receiveShadow = true;
      mesh.castShadow = true;
    }

    this.scene.add(mesh);
  }
}
