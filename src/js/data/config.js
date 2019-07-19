import TWEEN from 'tween.js';

// This object contains the state of the app
export default {
  isDev: false,
  isShowingStats: true,
  isLoaded: false,
  isTweening: false,
  isRotating: true,
  isMouseMoving: false,
  isMouseOver: false,
  maxAnisotropy: 1,
  dpr: 1,
  easing: TWEEN.Easing.Quadratic.InOut,
  duration: 500,
  model: {
    path: './assets/models/Teapot.json',
    scale: 20
  },
  texture: {
    path: './assets/textures/',
    imageFiles: [
      {name: 'UV', image: 'UV_Grid_Sm.jpg'},
      {name: 'map', image: 'map.jpg'}
    ]
  },
  mesh: {
    enableHelper: false,
    wireframe: false,
    translucent: true,
    material: {
      color: 0xffffff,
      emissive: 0xffffff
    }
  },
  fog: {
    color: 0xffffff,
    near: 0.0008
  },
  camera: {
    fov: 40,
    near: 0.01,
    far: 1000,
    aspect: 1920/1080,
    posX: 0,
    posY: 16.5,
    posZ: 100
  },
  controls: {
    autoRotate: false,
    autoRotateSpeed: -0.5,
    rotateSpeed: 0.5,
    zoomSpeed: 0.8,
    minDistance: 200,
    maxDistance: 600,
    minPolarAngle: Math.PI / 5,
    maxPolarAngle: Math.PI / 2,
    minAzimuthAngle: -Infinity,
    maxAzimuthAngle: Infinity,
    enableDamping: true,
    dampingFactor: 0.5,
    enableZoom: true,
    target: {
      x: 0,
      y: 0,
      z: 0
    }
  },
  ambientLight: {
    enabled: true,
    color: 0x141414
  },
  directionalLight: {
    enabled: true,
    color: 0xf0f0f0,
    intensity: 0.7,
    x: 93,
    y: -87,
    z: 274
  },
  shadow: {
    enabled: true,
    helperEnabled: false,
    bias: 0,
    mapWidth: 2048,
    mapHeight: 2048,
    near: 124,
    far: 358,
    top: 64,
    right: 100,
    bottom: 82,
    left: -100
  },
  pointLight: {
    enabled: false,
    color: 0xffffff,
    intensity: 0.34,
    distance: 115,
    x: -50,
    y: 15,
    z: 100
  },
  hemiLight: {
    enabled: true,
    color: 0xff3f3f,
    groundColor: 0xffffff,
    intensity: 0.55,
    x: 0,
    y: 0,
    z: 0
  }
};
