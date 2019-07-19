import * as THREE from 'three';

import Config from '../../data/config';

// USe this class as a helper to set up some default materials
export default class Material {
  constructor(color, opacity) {
    if(typeof opacity === null) opacity = 1.0
    this.basic = new THREE.MeshBasicMaterial({
      color,
      side: THREE.DoubleSide
    });

    this.standard = new THREE.MeshStandardMaterial({
      color,
      flatShading: false,
      roughness: 1,
      metalness: 0,
      side: THREE.DoubleSide
    });

    this.plane = new THREE.MeshToonMaterial({
      color,
      opacity,
      flatShading: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      transparent: true,
    });
    this.map = new THREE.MeshBasicMaterial({

    })

    this.wire = new THREE.MeshBasicMaterial({wireframe: true});
  }
}

