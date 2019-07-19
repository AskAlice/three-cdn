(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/css/app.scss":
/*!**************************!*\
  !*** ./src/css/app.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/config */ "./src/js/data/config.js");
/* harmony import */ var _utils_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/detector */ "./src/js/utils/detector.js");
/* harmony import */ var _app_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/main */ "./src/js/app/main.js");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../css/app.scss */ "./src/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_3__);


 // Styles

 // Check environment and set the Config helper

if (false) {}

function init() {
  // Check for webGL capabilities
  if (!_utils_detector__WEBPACK_IMPORTED_MODULE_1__["default"].webgl) {
    _utils_detector__WEBPACK_IMPORTED_MODULE_1__["default"].addGetWebGLMessage();
  } else {
    var container = document.getElementById('appContainer');
    new _app_main__WEBPACK_IMPORTED_MODULE_2__["default"](container);
  }
}

init();

/***/ }),

/***/ "./src/js/app/components/camera.js":
/*!*****************************************!*\
  !*** ./src/js/app/components/camera.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Camera; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/config */ "./src/js/data/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // Class that creates and updates the main camera

var Camera =
/*#__PURE__*/
function () {
  function Camera(renderer) {
    var _this = this;

    _classCallCheck(this, Camera);

    var width = renderer.domElement.width;
    var height = renderer.domElement.height; // Create and position a Perspective Camera

    this.threeCamera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](_data_config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.fov, width / height, _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.near, _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.far);
    this.threeCamera.position.set(_data_config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.posX, _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.posY, _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.posZ); // Initial sizing

    this.updateSize(renderer); // Listeners

    window.addEventListener('resize', function () {
      return _this.updateSize(renderer);
    }, false);
  }

  _createClass(Camera, [{
    key: "updateSize",
    value: function updateSize(renderer) {
      // Update camera aspect ratio with window aspect ratio
      this.threeCamera.aspect = renderer.domElement.width / renderer.domElement.height; // Always call updateProjectionMatrix on camera change

      this.threeCamera.updateProjectionMatrix();
    }
  }]);

  return Camera;
}();



/***/ }),

/***/ "./src/js/app/components/controls.js":
/*!*******************************************!*\
  !*** ./src/js/app/components/controls.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controls; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _utils_orbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/orbitControls */ "./src/js/utils/orbitControls.js");
/* harmony import */ var _utils_orbitControls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_orbitControls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/config */ "./src/js/data/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 // Controls based on orbit controls

var Controls =
/*#__PURE__*/
function () {
  function Controls(camera, container) {
    _classCallCheck(this, Controls);

    // Orbit controls first needs to pass in THREE to constructor
    var orbitControls = new _utils_orbitControls__WEBPACK_IMPORTED_MODULE_1___default.a(three__WEBPACK_IMPORTED_MODULE_0__);
    this.threeControls = new orbitControls(camera, container);
    this.init();
  }

  _createClass(Controls, [{
    key: "init",
    value: function init() {
      this.threeControls.target.set(_data_config__WEBPACK_IMPORTED_MODULE_2__["default"].controls.target.x, _data_config__WEBPACK_IMPORTED_MODULE_2__["default"].controls.target.y, _data_config__WEBPACK_IMPORTED_MODULE_2__["default"].controls.target.z);
      this.threeControls.autoRotate = false;
      this.threeControls.autoRotateSpeed = _data_config__WEBPACK_IMPORTED_MODULE_2__["default"].controls.autoRotateSpeed;
      this.threeControls.rotateSpeed = _data_config__WEBPACK_IMPORTED_MODULE_2__["default"].controls.rotateSpeed;
      this.threeControls.zoomSpeed = _data_config__WEBPACK_IMPORTED_MODULE_2__["default"].controls.zoomSpeed;
      this.threeControls.minDistance = _data_config__WEBPACK_IMPORTED_MODULE_2__["default"].controls.minDistance;
      this.threeControls.maxDistance = _data_config__WEBPACK_IMPORTED_MODULE_2__["default"].controls.maxDistance;
      this.threeControls.minPolarAngle = _data_config__WEBPACK_IMPORTED_MODULE_2__["default"].controls.minPolarAngle;
      this.threeControls.maxPolarAngle = _data_config__WEBPACK_IMPORTED_MODULE_2__["default"].controls.maxPolarAngle;
      this.threeControls.enableDamping = _data_config__WEBPACK_IMPORTED_MODULE_2__["default"].controls.enableDamping;
      this.threeControls.enableZoom = _data_config__WEBPACK_IMPORTED_MODULE_2__["default"].controls.enableZoom;
      this.threeControls.dampingFactor = _data_config__WEBPACK_IMPORTED_MODULE_2__["default"].controls.dampingFactor;
    }
  }]);

  return Controls;
}();



/***/ }),

/***/ "./src/js/app/components/light.js":
/*!****************************************!*\
  !*** ./src/js/app/components/light.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Light; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/config */ "./src/js/data/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // Sets up and places all lights in scene

var Light =
/*#__PURE__*/
function () {
  function Light(scene) {
    _classCallCheck(this, Light);

    this.scene = scene;
    this.init();
  }

  _createClass(Light, [{
    key: "init",
    value: function init() {
      // Ambient
      this.ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__["AmbientLight"](_data_config__WEBPACK_IMPORTED_MODULE_1__["default"].ambientLight.color);
      this.ambientLight.visible = _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].ambientLight.enabled; // Point light

      this.pointLight = new three__WEBPACK_IMPORTED_MODULE_0__["PointLight"](_data_config__WEBPACK_IMPORTED_MODULE_1__["default"].pointLight.color, _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].pointLight.intensity, _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].pointLight.distance);
      this.pointLight.position.set(_data_config__WEBPACK_IMPORTED_MODULE_1__["default"].pointLight.x, _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].pointLight.y, _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].pointLight.z);
      this.pointLight.visible = _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].pointLight.enabled; // Directional light

      this.directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__["DirectionalLight"](_data_config__WEBPACK_IMPORTED_MODULE_1__["default"].directionalLight.color, _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].directionalLight.intensity);
      this.directionalLight.position.set(_data_config__WEBPACK_IMPORTED_MODULE_1__["default"].directionalLight.x, _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].directionalLight.y, _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].directionalLight.z);
      this.directionalLight.visible = _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].directionalLight.enabled; // Shadow map

      this.directionalLight.castShadow = _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].shadow.enabled;
      this.directionalLight.shadow.bias = _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].shadow.bias;
      this.directionalLight.shadow.camera.near = _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].shadow.near;
      this.directionalLight.shadow.camera.far = _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].shadow.far;
      this.directionalLight.shadow.camera.left = _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].shadow.left;
      this.directionalLight.shadow.camera.right = _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].shadow.right;
      this.directionalLight.shadow.camera.top = _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].shadow.top;
      this.directionalLight.shadow.camera.bottom = _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].shadow.bottom;
      this.directionalLight.shadow.mapSize.width = _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].shadow.mapWidth;
      this.directionalLight.shadow.mapSize.height = _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].shadow.mapHeight; // Shadow camera helper

      this.directionalLightHelper = new three__WEBPACK_IMPORTED_MODULE_0__["CameraHelper"](this.directionalLight.shadow.camera);
      this.directionalLightHelper.visible = _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].shadow.helperEnabled; // Hemisphere light

      this.hemiLight = new three__WEBPACK_IMPORTED_MODULE_0__["HemisphereLight"](_data_config__WEBPACK_IMPORTED_MODULE_1__["default"].hemiLight.color, _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].hemiLight.groundColor, _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].hemiLight.intensity);
      this.hemiLight.position.set(_data_config__WEBPACK_IMPORTED_MODULE_1__["default"].hemiLight.x, _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].hemiLight.y, _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].hemiLight.z);
      this.hemiLight.visible = _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].hemiLight.enabled;
    }
  }, {
    key: "place",
    value: function place(lightName) {
      switch (lightName) {
        case 'ambient':
          this.scene.add(this.ambientLight);
          break;

        case 'directional':
          this.scene.add(this.directionalLight);
          this.scene.add(this.directionalLightHelper);
          break;

        case 'point':
          this.scene.add(this.pointLight);
          break;

        case 'hemi':
          this.scene.add(this.hemiLight);
          break;
      }
    }
  }]);

  return Light;
}();



/***/ }),

/***/ "./src/js/app/components/renderer.js":
/*!*******************************************!*\
  !*** ./src/js/app/components/renderer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/config */ "./src/js/data/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // Main webGL renderer class

var Renderer =
/*#__PURE__*/
function () {
  function Renderer(scene, container) {
    var _this = this;

    _classCallCheck(this, Renderer);

    // Properties
    this.scene = scene;
    this.container = container; // Create WebGL renderer and set its antialias

    this.threeRenderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({
      antialias: true,
      alpha: true
    }); // Set clear color to fog to enable fog or to hex color for no fog
    //this.threeRenderer.setClearColor(scene.fog.color);

    this.threeRenderer.setClearColor(0x000000, 0); // the default

    this.threeRenderer.setPixelRatio(window.devicePixelRatio); // For retina
    // Appends canvas

    container.appendChild(this.threeRenderer.domElement); // Shadow map options

    this.threeRenderer.shadowMap.enabled = true; //this.threeRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // Get anisotropy for textures

    _data_config__WEBPACK_IMPORTED_MODULE_1__["default"].maxAnisotropy = this.threeRenderer.getMaxAnisotropy(); // Initial size update set to canvas container

    this.updateSize(); // Listeners

    document.addEventListener('DOMContentLoaded', function () {
      return _this.updateSize();
    }, false);
    window.addEventListener('resize', function () {
      return _this.updateSize();
    }, false);
  }

  _createClass(Renderer, [{
    key: "updateSize",
    value: function updateSize() {
      this.threeRenderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
    }
  }, {
    key: "render",
    value: function render(scene, camera) {
      // Renders scene to canvas target
      this.threeRenderer.render(scene, camera);
    }
  }]);

  return Renderer;
}();



/***/ }),

/***/ "./src/js/app/helpers/geometry.js":
/*!****************************************!*\
  !*** ./src/js/app/helpers/geometry.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Geometry; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material */ "./src/js/app/helpers/material.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/config */ "./src/js/data/config.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 // This helper class can be used to create and then place geometry in the scene

var Geometry =
/*#__PURE__*/
function () {
  function Geometry(scene, textures) {
    _classCallCheck(this, Geometry);

    this.scene = scene;
    this.geo = null;
    this.type = null;
    this.cube = null;
    this.plane = null;
    this.map = null;
    this.textures = textures;
  }

  _createClass(Geometry, [{
    key: "make",
    value: function make(type) {
      var _this = this;

      if (type === 'plane') {
        this.type = type;
        return function (width, height) {
          var widthSegments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          var heightSegments = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
          _this.geo = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneGeometry"](width, height, widthSegments, heightSegments);
        };
      }

      if (type === 'map') {
        this.type = type;
        return function (width, height) {
          var widthSegments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          var heightSegments = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
          _this.geo = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneGeometry"](width, height, widthSegments, heightSegments);
        };
      }

      if (type === 'sphere') {
        this.type = type;
        return function (radius) {
          var widthSegments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;
          var heightSegments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 32;
          _this.geo = new three__WEBPACK_IMPORTED_MODULE_0__["SphereGeometry"](radius, widthSegments, heightSegments);
        };
      }

      if (type === 'cube') {
        this.type = type;
        return function (width, height, depth) {
          _this.geo = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](width, height, depth);
        };
      }

      if (type === 'node') {
        this.type = type;
        return function (radius) {
          _this.geo = new three__WEBPACK_IMPORTED_MODULE_0__["CylinderGeometry"](radius, radius, 4, 32);
        };
      }
    }
  }, {
    key: "place",
    value: function place(position, rotation, texture) {
      var _mesh$position, _mesh$rotation;

      console.log(texture);
      var material = new _material__WEBPACK_IMPORTED_MODULE_1__["default"](0x000000, 0.3).standard;

      if (this.type == 'plane') {
        var _gridHelper$position;

        material = new _material__WEBPACK_IMPORTED_MODULE_1__["default"](0x000000, 0.66).plane; // material = new Material(0xffffff,1).plane;

        var size = 130;
        var divisions = 10;
        var gridHelper = new three__WEBPACK_IMPORTED_MODULE_0__["GridHelper"](size, divisions, 0xffffff, 0xffffff);

        (_gridHelper$position = gridHelper.position).set.apply(_gridHelper$position, _toConsumableArray(position));

        gridHelper.position.y += 0.1;
        gridHelper.updateMatrix();
        this.scene.add(gridHelper);
      }

      if (this.type == 'cube') {
        material = new _material__WEBPACK_IMPORTED_MODULE_1__["default"](0x17f7ae, 0.3).standard;
      }

      if (this.type == 'node') {
        material = new _material__WEBPACK_IMPORTED_MODULE_1__["default"](0x17a7ae, 0.3).standard;
      }

      if (this.type == 'map') {
        material = new _material__WEBPACK_IMPORTED_MODULE_1__["default"](0x000000, null).map;
        material.map = this.textures.map;
      }

      var mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](this.geo, material);

      switch (this.type) {
        case 'cube':
          this.cube = mesh;
          break;

        case 'map':
          this.map = mesh;
          break;

        case 'plane':
          this.plane = mesh;
          break;
      }

      console.log(mesh); // Use ES6 spread to set position and rotation from passed in array

      (_mesh$position = mesh.position).set.apply(_mesh$position, _toConsumableArray(position));

      (_mesh$rotation = mesh.rotation).set.apply(_mesh$rotation, _toConsumableArray(rotation));

      if (_data_config__WEBPACK_IMPORTED_MODULE_2__["default"].shadow.enabled) {
        mesh.receiveShadow = true;
        mesh.castShadow = true;
      }

      this.scene.add(mesh);
    }
  }]);

  return Geometry;
}();



/***/ }),

/***/ "./src/js/app/helpers/material.js":
/*!****************************************!*\
  !*** ./src/js/app/helpers/material.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Material; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/config */ "./src/js/data/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


 // USe this class as a helper to set up some default materials

var Material = function Material(color, opacity) {
  _classCallCheck(this, Material);

  if (typeof opacity === null) opacity = 1.0;
  this.basic = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
    color: color,
    side: three__WEBPACK_IMPORTED_MODULE_0__["DoubleSide"]
  });
  this.standard = new three__WEBPACK_IMPORTED_MODULE_0__["MeshStandardMaterial"]({
    color: color,
    flatShading: false,
    roughness: 1,
    metalness: 0,
    side: three__WEBPACK_IMPORTED_MODULE_0__["DoubleSide"]
  });
  this.plane = new three__WEBPACK_IMPORTED_MODULE_0__["MeshToonMaterial"]({
    color: color,
    opacity: opacity,
    flatShading: true,
    side: three__WEBPACK_IMPORTED_MODULE_0__["DoubleSide"],
    depthWrite: false,
    transparent: true
  });
  this.map = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({});
  this.wire = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
    wireframe: true
  });
};



/***/ }),

/***/ "./src/js/app/helpers/meshHelper.js":
/*!******************************************!*\
  !*** ./src/js/app/helpers/meshHelper.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MeshHelper; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // Simple mesh helper that shows edges, wireframes, and face and vertex normals

var MeshHelper = function MeshHelper(scene, mesh) {
  _classCallCheck(this, MeshHelper);

  var wireframe = new three__WEBPACK_IMPORTED_MODULE_0__["WireframeGeometry"](mesh.geometry);
  var wireLine = new three__WEBPACK_IMPORTED_MODULE_0__["LineSegments"](wireframe);
  wireLine.material.depthTest = false;
  wireLine.material.opacity = 0.25;
  wireLine.material.transparent = true;
  mesh.add(wireLine);
  var edges = new three__WEBPACK_IMPORTED_MODULE_0__["EdgesGeometry"](mesh.geometry);
  var edgesLine = new three__WEBPACK_IMPORTED_MODULE_0__["LineSegments"](edges);
  edgesLine.material.depthTest = false;
  edgesLine.material.opacity = 0.25;
  edgesLine.material.transparent = true;
  mesh.add(edgesLine);
  scene.add(new three__WEBPACK_IMPORTED_MODULE_0__["BoxHelper"](mesh));
  scene.add(new three__WEBPACK_IMPORTED_MODULE_0__["FaceNormalsHelper"](mesh, 2));
  scene.add(new three__WEBPACK_IMPORTED_MODULE_0__["VertexNormalsHelper"](mesh, 2));
};



/***/ }),

/***/ "./src/js/app/helpers/stats.js":
/*!*************************************!*\
  !*** ./src/js/app/helpers/stats.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Local vars for rStats
var rS, bS, glS, tS;

var Stats =
/*#__PURE__*/
function () {
  function Stats(renderer) {
    _classCallCheck(this, Stats);

    this.renderer = renderer;
  }

  _createClass(Stats, [{
    key: "setUp",
    value: function setUp() {
      bS = new BrowserStats(); //glS = new glStats();
      //  tS = new threeStats(this.renderer.threeRenderer);

      rS = new rStats({
        CSSPath: './css/',
        userTimingAPI: true,
        values: {
          frame: {
            caption: 'Total frame time (ms)',
            over: 16,
            average: true,
            avgMs: 100
          },
          fps: {
            caption: 'Framerate (FPS)',
            below: 30
          },
          calls: {
            caption: 'Calls (three.js)',
            over: 3000
          },
          raf: {
            caption: 'Time since last rAF (ms)',
            average: true,
            avgMs: 100
          },
          rstats: {
            caption: 'rStats update (ms)',
            average: true,
            avgMs: 100
          },
          texture: {
            caption: 'GenTex',
            average: true,
            avgMs: 100
          }
        },
        groups: [{
          caption: 'Framerate',
          values: ['fps', 'raf']
        }, {
          caption: 'Frame Budget',
          values: ['frame', 'texture', 'setup', 'render']
        }],
        fractions: [{
          base: 'frame',
          steps: ['texture', 'setup', 'render']
        }],
        plugins: [bS] //glS]

      });
    }
  }], [{
    key: "start",
    value: function start() {
      rS('frame').start(); // glS.start();

      rS('rAF').tick();
      rS('FPS').frame();
      rS('render').start();
    }
  }, {
    key: "end",
    value: function end() {
      rS('render').end(); // render finished

      rS('frame').end(); // frame finished
      // Local rStats update

      rS('rStats').start();
      rS().update();
      rS('rStats').end();
    }
  }]);

  return Stats;
}();



/***/ }),

/***/ "./src/js/app/main.js":
/*!****************************!*\
  !*** ./src/js/app/main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tween.js */ "./node_modules/tween.js/src/Tween.js");
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/renderer */ "./src/js/app/components/renderer.js");
/* harmony import */ var _components_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/camera */ "./src/js/app/components/camera.js");
/* harmony import */ var _components_light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/light */ "./src/js/app/components/light.js");
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/controls */ "./src/js/app/components/controls.js");
/* harmony import */ var _helpers_geometry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/geometry */ "./src/js/app/helpers/geometry.js");
/* harmony import */ var _helpers_stats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/stats */ "./src/js/app/helpers/stats.js");
/* harmony import */ var _model_texture__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/texture */ "./src/js/app/model/texture.js");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model/model */ "./src/js/app/model/model.js");
/* harmony import */ var _managers_interaction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./managers/interaction */ "./src/js/app/managers/interaction.js");
/* harmony import */ var _managers_datGUI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./managers/datGUI */ "./src/js/app/managers/datGUI.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../data/config */ "./src/js/data/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Global imports -

 // Local imports -
// Components




 // Helpers


 // Model


 // Managers


 // data

 // -- End of imports
// This class instantiates and ties all of the components together, starts the loading process and renders the main loop

var Main =
/*#__PURE__*/
function () {
  function Main(container) {
    var _this = this;

    _classCallCheck(this, Main);

    // Set container property to container element
    this.container = container; // Start Three clock

    this.clock = new three__WEBPACK_IMPORTED_MODULE_0__["Clock"]();
    this.t = 0;
    this.line = null;
    this.count = 0;
    this.curve = null;
    this.particles = [];
    this.traffic = new three__WEBPACK_IMPORTED_MODULE_0__["Group"]();
    this.starsGeometry = null;
    this.axis = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](); // Main scene creation

    this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"](); //this.scene.fog = new THREE.FogExp2(Config.fog.color, Config.fog.near);
    // Get Device Pixel Ratio first for retina

    if (window.devicePixelRatio) {
      _data_config__WEBPACK_IMPORTED_MODULE_12__["default"].dpr = window.devicePixelRatio;
    } // Main renderer constructor


    this.renderer = new _components_renderer__WEBPACK_IMPORTED_MODULE_2__["default"](this.scene, container); // Components instantiations

    this.camera = new _components_camera__WEBPACK_IMPORTED_MODULE_3__["default"](this.renderer.threeRenderer);
    console.log(this.camera.threeCamera.position);
    this.controls = new _components_controls__WEBPACK_IMPORTED_MODULE_5__["default"](this.camera.threeCamera, container);
    this.light = new _components_light__WEBPACK_IMPORTED_MODULE_4__["default"](this.scene); // Create and place lights in scene

    var lights = ['ambient', 'directional', 'point', 'hemi'];
    lights.forEach(function (light) {
      return _this.light.place(light);
    }); // Create and place geo in scene
    // Set up rStats if dev environment

    if (_data_config__WEBPACK_IMPORTED_MODULE_12__["default"].isDev && _data_config__WEBPACK_IMPORTED_MODULE_12__["default"].isShowingStats) {
      this.stats = new _helpers_stats__WEBPACK_IMPORTED_MODULE_7__["default"](this.renderer);
      this.stats.setUp();
    } // Instantiate texture class


    this.texture = new _model_texture__WEBPACK_IMPORTED_MODULE_8__["default"](); // Start loading the textures and then go on to load the model after the texture Promises have resolved

    this.texture.load().then(function () {
      _this.manager = new three__WEBPACK_IMPORTED_MODULE_0__["LoadingManager"](); // Textures loaded, load model

      _this.model = new _model_model__WEBPACK_IMPORTED_MODULE_9__["default"](_this.scene, _this.manager, _this.texture.textures);

      _this.model.load();

      _this.geometry = new _helpers_geometry__WEBPACK_IMPORTED_MODULE_6__["default"](_this.scene, _this.texture.textures);

      _this.geometry.make('plane')(130, 130, 1, 1);

      _this.geometry.place([0, 10, 0], [Math.PI / 2, 0, 0]);

      _this.geometry.make('map')(150, 150, 1, 1);

      _this.geometry.place([0, -15, 0], [-Math.PI / 2, 0, 0]);

      _this.geometry.make('cube')(15, 15, 15);

      _this.geometry.place([0, 30, 0], [Math.PI / 36, Math.PI / 4, 0]);

      var nodeGeometry = new three__WEBPACK_IMPORTED_MODULE_0__["CylinderGeometry"](2, 2, 1.5, 32);
      var nodeMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["MeshToonMaterial"]({
        transparent: true,
        flatShading: true,
        opacity: 1,
        color: 1570734,
        emissive: 0,
        specular: 0,
        shininess: 0
      });
      var node1 = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](nodeGeometry, nodeMaterial);
      node1.receiveShadows = true;
      node1.castShadows = true;
      node1.rotateY(Math.PI / 4);
      var node2 = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](nodeGeometry, nodeMaterial);
      node2.position.y = 1.75;
      node2.receiveShadows = true;
      node2.castShadows = true;
      node2.rotateY(Math.PI / 4); // cube.rotateX(  Math.PI / 12)
      // cube.rotateZ(  Math.PI / 12)

      var node = new three__WEBPACK_IMPORTED_MODULE_0__["Group"]();
      node.add(node1);
      node.add(node2);
      node.position.y = _this.geometry.plane.position.y + 1.1;
      node.position.x = 45;
      node.position.z = 50;

      _this.scene.add(node);

      var secondNode = node.clone();
      secondNode.position.x = -13;
      secondNode.position.z = -2.5;

      _this.scene.add(secondNode);

      var curve = new three__WEBPACK_IMPORTED_MODULE_0__["CatmullRomCurve3"]([new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](_this.geometry.cube.position.x, _this.geometry.cube.position.y - 7.5, _this.geometry.cube.position.z), new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](_this.geometry.cube.position.x, _this.geometry.cube.position.y - 14, _this.geometry.cube.position.z), new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](node.position.x, node.position.y + 4, node.position.z), node.position, //new THREE.Vector3(node.position.x, node.position.y-8, node.position.z),
      new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](node.position.x, _this.geometry.map.position.y, node.position.z)]);
      _this.curve = curve;
      var points = curve.getPoints(30);
      var lg = new three__WEBPACK_IMPORTED_MODULE_0__["BufferGeometry"]().setFromPoints(points);
      var lm = new three__WEBPACK_IMPORTED_MODULE_0__["LineBasicMaterial"]({
        color: 0x0000ff
      });
      _this.line = new three__WEBPACK_IMPORTED_MODULE_0__["Line"](lg, lm); //  this.scene.add( this.line );

      _this.scene.add(_this.traffic); // onProgress callback


      _this.manager.onProgress = function (item, loaded, total) {
        console.log("".concat(item, ": ").concat(loaded, " ").concat(total));
      }; // All loaders done now


      _this.manager.onLoad = function () {
        // Set up interaction manager with the app now that the model is finished loading
        new _managers_interaction__WEBPACK_IMPORTED_MODULE_10__["default"](_this.renderer.threeRenderer, _this.scene, _this.camera.threeCamera, _this.controls.threeControls); // Add dat.GUI controls if dev

        if (_data_config__WEBPACK_IMPORTED_MODULE_12__["default"].isDev) {
          new _managers_datGUI__WEBPACK_IMPORTED_MODULE_11__["default"](_this, _this.model.obj);
        } // Everything is now fully loaded


        _data_config__WEBPACK_IMPORTED_MODULE_12__["default"].isLoaded = true;
        _this.container.querySelector('#loading').style.display = 'none';
      };
    }); // Start render which does not wait for model fully loaded

    this.render();
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      // Render rStats if Dev
      if (_data_config__WEBPACK_IMPORTED_MODULE_12__["default"].isDev && _data_config__WEBPACK_IMPORTED_MODULE_12__["default"].isShowingStats) {
        _helpers_stats__WEBPACK_IMPORTED_MODULE_7__["default"].start();
      } // Call render function and pass in created scene and camera


      this.renderer.render(this.scene, this.camera.threeCamera); // rStats has finished determining render call now

      if (_data_config__WEBPACK_IMPORTED_MODULE_12__["default"].isDev && _data_config__WEBPACK_IMPORTED_MODULE_12__["default"].isShowingStats) {
        _helpers_stats__WEBPACK_IMPORTED_MODULE_7__["default"].end();
      } // Delta time is sometimes needed for certain updates
      //const delta = this.clock.getDelta();
      // Call any vendor or module frame updates here


      tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.update();
      this.controls.threeControls.update(); // RAF

      if (this.curve !== null) {
        //   console.log(this.traffic);
        // console.log(this.traffic.children);
        var starsMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["PointsMaterial"]({
          color: 0x17e7ae
        });
        var starsGeometry = new three__WEBPACK_IMPORTED_MODULE_0__["Geometry"]();
        var star = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
        starsGeometry.vertices.push(star);
        var pts = new three__WEBPACK_IMPORTED_MODULE_0__["Points"](starsGeometry, starsMaterial);
        pts.t = 0; //console.log('wat');
        //console.log(pts);

        this.traffic.add(pts);
        this.traffic.updateMatrix();
        var me = this; // set the quaternion

        this.traffic.children.forEach(function (p) {
          p.t <= 0.995 ? p.t += 0.005 : me.traffic.remove(p);
          var up = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 1, 0);
          var pp = me.curve.getUtoTmapping(p.t);
          var pos = me.curve.getPoint(pp);
          var tangent = me.curve.getTangent(p.t).normalize(); // console.log(tangent);

          var axis = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
          axis.crossVectors(up, tangent).normalize();
          var radians = Math.acos(up.dot(tangent));
          p.quaternion.setFromAxisAngle(axis, radians);
          p.position.x = pos.x;
          p.position.y = pos.y;
          p.position.z = pos.z;
          p.updateMatrix();
        });
        me.traffic = this.traffic; // .position.set(pos.x, pos.y, pos.z);
      }

      requestAnimationFrame(this.render.bind(this)); // Bind the main class instead of window object
    }
  }]);

  return Main;
}();



/***/ }),

/***/ "./src/js/app/managers/datGUI.js":
/*!***************************************!*\
  !*** ./src/js/app/managers/datGUI.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatGUI; });
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/config */ "./src/js/data/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // Manages all dat.GUI interactions

var DatGUI = function DatGUI(main, mesh) {
  var _this = this;

  _classCallCheck(this, DatGUI);

  var gui = new dat.GUI();
  this.camera = main.camera.threeCamera;
  this.controls = main.controls.threeControls;
  this.light = main.light;
  /* Global */
  //gui.close();

  /* Camera */

  var cameraFolder = gui.addFolder('Camera');
  var cameraFOVGui = cameraFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].camera, 'fov', 0, 180).name('Camera FOV');
  cameraFOVGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.camera.fov = value;
  });
  cameraFOVGui.onFinishChange(function () {
    _this.camera.updateProjectionMatrix();

    _this.controls.enableRotate = true;
  });
  var cameraAspectGui = cameraFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].camera, 'aspect', 0, 4).name('Camera Aspect');
  cameraAspectGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.camera.aspect = value;
  });
  cameraAspectGui.onFinishChange(function () {
    _this.camera.updateProjectionMatrix();

    _this.controls.enableRotate = true;
  });
  var cameraFogColorGui = cameraFolder.addColor(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].fog, 'color').name('Fog Color');
  cameraFogColorGui.onChange(function (value) {
    main.scene.fog.color.setHex(value);
  });
  var cameraFogNearGui = cameraFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].fog, 'near', 0.000, 0.010).name('Fog Near');
  cameraFogNearGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    main.scene.fog.density = value;
  });
  cameraFogNearGui.onFinishChange(function () {
    _this.controls.enableRotate = true;
  });
  /* Controls */

  var controlsFolder = gui.addFolder('Controls');
  controlsFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].controls, 'autoRotate').name('Auto Rotate').onChange(function (value) {
    _this.controls.autoRotate = value;
  });
  var controlsAutoRotateSpeedGui = controlsFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].controls, 'autoRotateSpeed', -1, 1).name('Rotation Speed');
  controlsAutoRotateSpeedGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.controls.autoRotateSpeed = value;
  });
  controlsAutoRotateSpeedGui.onFinishChange(function () {
    _this.controls.enableRotate = true;
  });
  /* Mesh */

  var meshFolder = gui.addFolder('Mesh');
  meshFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].mesh, 'translucent', true).name('Translucent').onChange(function (value) {
    if (value) {
      mesh.material.transparent = true;
      mesh.material.opacity = 0.5;
    } else {
      mesh.material.opacity = 1.0;
    }
  });
  meshFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].mesh, 'wireframe', true).name('Wireframe').onChange(function (value) {
    mesh.material.wireframe = value;
  });
  /* Lights */
  // Ambient Light

  var ambientLightFolder = gui.addFolder('Ambient Light');
  ambientLightFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].ambientLight, 'enabled').name('Enabled').onChange(function (value) {
    _this.light.ambientLight.visible = value;
  });
  ambientLightFolder.addColor(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].ambientLight, 'color').name('Color').onChange(function (value) {
    _this.light.ambientLight.color.setHex(value);
  }); //   // Directional Light

  var directionalLightFolder = gui.addFolder('Directional Light');
  directionalLightFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].directionalLight, 'enabled').name('Enabled').onChange(function (value) {
    _this.light.directionalLight.visible = value;
  });
  directionalLightFolder.addColor(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].directionalLight, 'color').name('Color').onChange(function (value) {
    _this.light.directionalLight.color.setHex(value);
  });
  var directionalLightIntensityGui = directionalLightFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].directionalLight, 'intensity', 0, 2).name('Intensity');
  directionalLightIntensityGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.directionalLight.intensity = value;
  });
  directionalLightIntensityGui.onFinishChange(function () {
    _this.controls.enableRotate = true;
  });
  var directionalLightPositionXGui = directionalLightFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].directionalLight, 'x', -1000, 1000).name('Position X');
  directionalLightPositionXGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.directionalLight.position.x = value;
  });
  directionalLightPositionXGui.onFinishChange(function () {
    _this.controls.enableRotate = true;
  });
  var directionalLightPositionYGui = directionalLightFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].directionalLight, 'y', -1000, 1000).name('Position Y');
  directionalLightPositionYGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.directionalLight.position.y = value;
  });
  directionalLightPositionYGui.onFinishChange(function () {
    _this.controls.enableRotate = true;
  });
  var directionalLightPositionZGui = directionalLightFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].directionalLight, 'z', -1000, 1000).name('Position Z');
  directionalLightPositionZGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.directionalLight.position.z = value;
  });
  directionalLightPositionZGui.onFinishChange(function () {
    _this.controls.enableRotate = true;
  }); // Shadow Map

  var shadowFolder = gui.addFolder('Shadow Map');
  shadowFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].shadow, 'enabled').name('Enabled').onChange(function (value) {
    _this.light.directionalLight.castShadow = value;
  });
  shadowFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].shadow, 'helperEnabled').name('Helper Enabled').onChange(function (value) {
    _this.light.directionalLightHelper.visible = value;
  });
  var shadowNearGui = shadowFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].shadow, 'near', 0, 400).name('Near');
  shadowNearGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.directionalLight.shadow.camera.near = value;
  });
  shadowNearGui.onFinishChange(function () {
    _this.controls.enableRotate = true;

    _this.light.directionalLight.shadow.map.dispose();

    _this.light.directionalLight.shadow.map = null;

    _this.light.directionalLightHelper.update();
  });
  var shadowFarGui = shadowFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].shadow, 'far', 0, 1200).name('Far');
  shadowFarGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.directionalLight.shadow.camera.far = value;
  });
  shadowFarGui.onFinishChange(function () {
    _this.controls.enableRotate = true;

    _this.light.directionalLight.shadow.map.dispose();

    _this.light.directionalLight.shadow.map = null;

    _this.light.directionalLightHelper.update();
  });
  var shadowTopGui = shadowFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].shadow, 'top', -400, 400).name('Top');
  shadowTopGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.directionalLight.shadow.camera.top = value;
  });
  shadowTopGui.onFinishChange(function () {
    _this.controls.enableRotate = true;

    _this.light.directionalLight.shadow.map.dispose();

    _this.light.directionalLight.shadow.map = null;

    _this.light.directionalLightHelper.update();
  });
  var shadowRightGui = shadowFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].shadow, 'right', -400, 400).name('Right');
  shadowRightGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.directionalLight.shadow.camera.right = value;
  });
  shadowRightGui.onFinishChange(function () {
    _this.controls.enableRotate = true;

    _this.light.directionalLight.shadow.map.dispose();

    _this.light.directionalLight.shadow.map = null;

    _this.light.directionalLightHelper.update();
  });
  var shadowBottomGui = shadowFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].shadow, 'bottom', -400, 400).name('Bottom');
  shadowBottomGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.directionalLight.shadow.camera.bottom = value;
  });
  shadowBottomGui.onFinishChange(function () {
    _this.controls.enableRotate = true;

    _this.light.directionalLight.shadow.map.dispose();

    _this.light.directionalLight.shadow.map = null;

    _this.light.directionalLightHelper.update();
  });
  var shadowLeftGui = shadowFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].shadow, 'left', -400, 400).name('Left');
  shadowLeftGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.directionalLight.shadow.camera.left = value;
  });
  shadowLeftGui.onFinishChange(function () {
    _this.controls.enableRotate = true;

    _this.light.directionalLight.shadow.map.dispose();

    _this.light.directionalLight.shadow.map = null;

    _this.light.directionalLightHelper.update();
  });
  var shadowBiasGui = shadowFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].shadow, 'bias', -0.000010, 1).name('Bias');
  shadowBiasGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.directionalLight.shadow.bias = value;
  });
  shadowBiasGui.onFinishChange(function () {
    _this.controls.enableRotate = true;

    _this.light.directionalLight.shadow.map.dispose();

    _this.light.directionalLight.shadow.map = null;

    _this.light.directionalLightHelper.update();
  }); // Point Light

  var pointLightFolder = gui.addFolder('Point Light');
  pointLightFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].pointLight, 'enabled').name('Enabled').onChange(function (value) {
    _this.light.pointLight.visible = value;
  });
  pointLightFolder.addColor(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].pointLight, 'color').name('Color').onChange(function (value) {
    _this.light.pointLight.color.setHex(value);
  });
  var pointLightIntensityGui = pointLightFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].pointLight, 'intensity', 0, 2).name('Intensity');
  pointLightIntensityGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.pointLight.intensity = value;
  });
  pointLightIntensityGui.onFinishChange(function () {
    _this.controls.enableRotate = true;
  });
  var pointLightDistanceGui = pointLightFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].pointLight, 'distance', 0, 1000).name('Distance');
  pointLightDistanceGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.pointLight.distance = value;
  });
  pointLightDistanceGui.onFinishChange(function () {
    _this.controls.enableRotate = true;
  });
  var pointLightPositionXGui = pointLightFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].pointLight, 'x', -1000, 1000).name('Position X');
  pointLightPositionXGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.pointLight.position.x = value;
  });
  pointLightPositionXGui.onFinishChange(function () {
    _this.controls.enableRotate = true;
  });
  var pointLightPositionYGui = pointLightFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].pointLight, 'y', -1000, 1000).name('Position Y');
  pointLightPositionYGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.pointLight.position.y = value;
  });
  pointLightPositionYGui.onFinishChange(function () {
    _this.controls.enableRotate = true;
  });
  var pointLightPositionZGui = pointLightFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].pointLight, 'z', -1000, 1000).name('Position Z');
  pointLightPositionZGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.pointLight.position.z = value;
  });
  pointLightPositionZGui.onFinishChange(function () {
    _this.controls.enableRotate = true;
  }); //   // Hemi Light

  var hemiLightFolder = gui.addFolder('Hemi Light');
  hemiLightFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].hemiLight, 'enabled').name('Enabled').onChange(function (value) {
    _this.light.hemiLight.visible = value;
  });
  hemiLightFolder.addColor(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].hemiLight, 'color').name('Color').onChange(function (value) {
    _this.light.hemiLight.color.setHex(value);
  });
  hemiLightFolder.addColor(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].hemiLight, 'groundColor').name('ground Color').onChange(function (value) {
    _this.light.hemiLight.groundColor.setHex(value);
  });
  var hemiLightIntensityGui = hemiLightFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].hemiLight, 'intensity', 0, 2).name('Intensity');
  hemiLightIntensityGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.hemiLight.intensity = value;
  });
  hemiLightIntensityGui.onFinishChange(function () {
    _this.controls.enableRotate = true;
  });
  var hemiLightPositionXGui = hemiLightFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].hemiLight, 'x', -1000, 1000).name('Position X');
  hemiLightPositionXGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.hemiLight.position.x = value;
  });
  hemiLightPositionXGui.onFinishChange(function () {
    _this.controls.enableRotate = true;
  });
  var hemiLightPositionYGui = hemiLightFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].hemiLight, 'y', -500, 1000).name('Position Y');
  hemiLightPositionYGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.hemiLight.position.y = value;
  });
  hemiLightPositionYGui.onFinishChange(function () {
    _this.controls.enableRotate = true;
  });
  var hemiLightPositionZGui = hemiLightFolder.add(_data_config__WEBPACK_IMPORTED_MODULE_0__["default"].hemiLight, 'z', -1000, 1000).name('Position Z');
  hemiLightPositionZGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.light.hemiLight.position.z = value;
  });
  hemiLightPositionZGui.onFinishChange(function () {
    _this.controls.enableRotate = true;
  });
};



/***/ }),

/***/ "./src/js/app/managers/interaction.js":
/*!********************************************!*\
  !*** ./src/js/app/managers/interaction.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Interaction; });
/* harmony import */ var _utils_keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/keyboard */ "./src/js/utils/keyboard.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/helpers */ "./src/js/utils/helpers.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/config */ "./src/js/data/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 // Manages all input interactions

var Interaction =
/*#__PURE__*/
function () {
  function Interaction(renderer, scene, camera, controls) {
    var _this = this;

    _classCallCheck(this, Interaction);

    // Properties
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.controls = controls;
    this.timeout = null; // Instantiate keyboard helper

    this.keyboard = new _utils_keyboard__WEBPACK_IMPORTED_MODULE_0__["default"](); // Listeners
    // Mouse events

    this.renderer.domElement.addEventListener('mousemove', function (event) {
      return _utils_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].throttle(_this.onMouseMove(event), 250);
    }, false);
    this.renderer.domElement.addEventListener('mouseleave', function (event) {
      return _this.onMouseLeave(event);
    }, false);
    this.renderer.domElement.addEventListener('mouseover', function (event) {
      return _this.onMouseOver(event);
    }, false); // Keyboard events

    this.keyboard.domElement.addEventListener('keydown', function (event) {
      // Only once
      if (event.repeat) {
        return;
      }

      if (_this.keyboard.eventMatches(event, 'escape')) {
        console.log('Escape pressed');
      }
    });
  }

  _createClass(Interaction, [{
    key: "onMouseOver",
    value: function onMouseOver(event) {
      event.preventDefault();
      _data_config__WEBPACK_IMPORTED_MODULE_2__["default"].isMouseOver = true;
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(event) {
      event.preventDefault();
      _data_config__WEBPACK_IMPORTED_MODULE_2__["default"].isMouseOver = false;
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      event.preventDefault();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _data_config__WEBPACK_IMPORTED_MODULE_2__["default"].isMouseMoving = false;
      }, 200);
      _data_config__WEBPACK_IMPORTED_MODULE_2__["default"].isMouseMoving = true;
    }
  }]);

  return Interaction;
}();



/***/ }),

/***/ "./src/js/app/model/model.js":
/*!***********************************!*\
  !*** ./src/js/app/model/model.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _helpers_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/material */ "./src/js/app/helpers/material.js");
/* harmony import */ var _helpers_meshHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/meshHelper */ "./src/js/app/helpers/meshHelper.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helpers */ "./src/js/utils/helpers.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/config */ "./src/js/data/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





 // Loads in a single object from the config file

var Model =
/*#__PURE__*/
function () {
  function Model(scene, manager, textures) {
    _classCallCheck(this, Model);

    this.scene = scene;
    this.textures = textures; // Manager is passed in to loader to determine when loading done in main

    this.loader = new three__WEBPACK_IMPORTED_MODULE_0__["ObjectLoader"](manager);
    this.obj = null;
  }

  _createClass(Model, [{
    key: "load",
    value: function load() {
      var _this = this;

      // Load model with ObjectLoader
      this.loader.load(_data_config__WEBPACK_IMPORTED_MODULE_4__["default"].model.path, function (obj) {
        obj.traverse(function (child) {
          if (child instanceof three__WEBPACK_IMPORTED_MODULE_0__["Mesh"]) {
            // Create material for mesh and set its map to texture by name from preloaded textures
            var material = new _helpers_material__WEBPACK_IMPORTED_MODULE_1__["default"](0xffffff).standard;
            material.map = _this.textures.UV;
            child.material = material; // Set to cast and receive shadow if enabled

            if (_data_config__WEBPACK_IMPORTED_MODULE_4__["default"].shadow.enabled) {
              child.receiveShadow = true;
              child.castShadow = true;
            }
          }
        }); // Add mesh helper if Dev

        if (_data_config__WEBPACK_IMPORTED_MODULE_4__["default"].isDev && _data_config__WEBPACK_IMPORTED_MODULE_4__["default"].mesh.enableHelper) {
          new _helpers_meshHelper__WEBPACK_IMPORTED_MODULE_2__["default"](_this.scene, obj);
        } // Set prop to obj so it can be accessed from outside the class


        _this.obj = obj;
        obj.scale.multiplyScalar(_data_config__WEBPACK_IMPORTED_MODULE_4__["default"].model.scale); // this.scene.add(obj);
      }, _utils_helpers__WEBPACK_IMPORTED_MODULE_3__["default"].logProgress(), _utils_helpers__WEBPACK_IMPORTED_MODULE_3__["default"].logError());
    }
  }]);

  return Model;
}();



/***/ }),

/***/ "./src/js/app/model/texture.js":
/*!*************************************!*\
  !*** ./src/js/app/model/texture.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Texture; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers */ "./src/js/utils/helpers.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/config */ "./src/js/data/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // Promise polyfill for IE



 // This class preloads all textures in the imageFiles array in the Config via ES6 Promises.
// Once all textures are done loading the model itself will be loaded after the Promise .then() callback.
// Using promises to preload textures prevents issues when applying textures to materials
// before the textures have loaded.

var Texture =
/*#__PURE__*/
function () {
  function Texture() {
    _classCallCheck(this, Texture);

    // Prop that will contain all loaded textures
    this.textures = {};
  }

  _createClass(Texture, [{
    key: "load",
    value: function load() {
      var _this = this;

      var loader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]();
      var maxAnisotropy = _data_config__WEBPACK_IMPORTED_MODULE_3__["default"].maxAnisotropy;
      var imageFiles = _data_config__WEBPACK_IMPORTED_MODULE_3__["default"].texture.imageFiles;
      var promiseArray = [];
      loader.setPath(_data_config__WEBPACK_IMPORTED_MODULE_3__["default"].texture.path);
      imageFiles.forEach(function (imageFile) {
        // Add an individual Promise for each image in array
        promiseArray.push(new es6_promise__WEBPACK_IMPORTED_MODULE_1__["Promise"](function (resolve, reject) {
          // Each Promise will attempt to load the image file
          loader.load(imageFile.image, // This gets called on load with the loaded texture
          function (texture) {
            texture.anisotropy = maxAnisotropy; // Resolve Promise with object of texture if it is instance of THREE.Texture

            var modelOBJ = {};
            modelOBJ[imageFile.name] = texture;
            if (modelOBJ[imageFile.name] instanceof three__WEBPACK_IMPORTED_MODULE_0__["Texture"]) resolve(modelOBJ);
          }, _utils_helpers__WEBPACK_IMPORTED_MODULE_2__["default"].logProgress(), function (xhr) {
            return reject(new Error(xhr + 'An error occurred loading while loading ' + imageFile.image));
          });
        }));
      }); // Iterate through all Promises in array and return another Promise when all have resolved or console log reason when any reject

      return es6_promise__WEBPACK_IMPORTED_MODULE_1__["Promise"].all(promiseArray).then(function (textures) {
        // Set the textures prop object to have name be the resolved texture
        for (var i = 0; i < textures.length; i++) {
          _this.textures[Object.keys(textures[i])[0]] = textures[i][Object.keys(textures[i])[0]];
        }
      }, function (reason) {
        return console.log(reason);
      });
    }
  }]);

  return Texture;
}();



/***/ }),

/***/ "./src/js/data/config.js":
/*!*******************************!*\
  !*** ./src/js/data/config.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tween.js */ "./node_modules/tween.js/src/Tween.js");
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_0__);
 // This object contains the state of the app

/* harmony default export */ __webpack_exports__["default"] = ({
  isDev: false,
  isShowingStats: true,
  isLoaded: false,
  isTweening: false,
  isRotating: true,
  isMouseMoving: false,
  isMouseOver: false,
  maxAnisotropy: 1,
  dpr: 1,
  easing: tween_js__WEBPACK_IMPORTED_MODULE_0___default.a.Easing.Quadratic.InOut,
  duration: 500,
  model: {
    path: './assets/models/Teapot.json',
    scale: 20
  },
  texture: {
    path: './assets/textures/',
    imageFiles: [{
      name: 'UV',
      image: 'UV_Grid_Sm.jpg'
    }, {
      name: 'map',
      image: 'map.jpg'
    }]
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
    aspect: 1920 / 1080,
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
});

/***/ }),

/***/ "./src/js/utils/detector.js":
/*!**********************************!*\
  !*** ./src/js/utils/detector.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  canvas: !!window.CanvasRenderingContext2D,
  webgl: function () {
    try {
      var canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }(),
  workers: !!window.Worker,
  fileapi: window.File && window.FileReader && window.FileList && window.Blob,
  getWebGLErrorMessage: function getWebGLErrorMessage() {
    var element = document.createElement('div');
    element.id = 'webgl-error-message';
    element.style.fontFamily = 'monospace';
    element.style.fontSize = '13px';
    element.style.fontWeight = 'normal';
    element.style.textAlign = 'center';
    element.style.background = '#fff';
    element.style.color = '#000';
    element.style.padding = '1.5em';
    element.style.width = '400px';
    element.style.margin = '5em auto 0';

    if (!this.webgl) {
      element.innerHTML = window.WebGLRenderingContext ? ['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000000">WebGL</a>.<br />', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000000">here</a>.'].join('\n') : ['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000000">WebGL</a>.<br/>', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000000">here</a>.'].join('\n');
    }

    return element;
  },
  addGetWebGLMessage: function addGetWebGLMessage(parameters) {
    var parent, id, element;
    parameters = parameters || {};
    parent = parameters.parent !== undefined ? parameters.parent : document.body;
    id = parameters.id !== undefined ? parameters.id : 'oldie';
    element = this.getWebGLErrorMessage();
    element.id = id;
    parent.appendChild(element);
  }
});

/***/ }),

/***/ "./src/js/utils/helpers.js":
/*!*********************************!*\
  !*** ./src/js/utils/helpers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Helpers; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Provides simple static functions that are used multiple times in the app
var Helpers =
/*#__PURE__*/
function () {
  function Helpers() {
    _classCallCheck(this, Helpers);
  }

  _createClass(Helpers, null, [{
    key: "throttle",
    value: function throttle(fn, threshhold, scope) {
      threshhold || (threshhold = 250);
      var last, deferTimer;
      return function () {
        var context = scope || this;
        var now = +new Date(),
            args = arguments;

        if (last && now < last + threshhold) {
          clearTimeout(deferTimer);
          deferTimer = setTimeout(function () {
            last = now;
            fn.apply(context, args);
          }, threshhold);
        } else {
          last = now;
          fn.apply(context, args);
        }
      };
    }
  }, {
    key: "logProgress",
    value: function logProgress() {
      return function (xhr) {
        if (xhr.lengthComputable) {
          var percentComplete = xhr.loaded / xhr.total * 100;
          console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
      };
    }
  }, {
    key: "logError",
    value: function logError() {
      return function (xhr) {
        console.error(xhr);
      };
    }
  }, {
    key: "handleColorChange",
    value: function handleColorChange(color) {
      return function (value) {
        if (typeof value === 'string') {
          value = value.replace('#', '0x');
        }

        color.setHex(value);
      };
    }
  }, {
    key: "update",
    value: function update(mesh) {
      this.needsUpdate(mesh.material, mesh.geometry);
    }
  }, {
    key: "needsUpdate",
    value: function needsUpdate(material, geometry) {
      return function () {
        material.shading = +material.shading; //Ensure number

        material.vertexColors = +material.vertexColors; //Ensure number

        material.side = +material.side; //Ensure number

        material.needsUpdate = true;
        geometry.verticesNeedUpdate = true;
        geometry.normalsNeedUpdate = true;
        geometry.colorsNeedUpdate = true;
      };
    }
  }, {
    key: "updateTexture",
    value: function updateTexture(material, materialKey, textures) {
      return function (key) {
        material[materialKey] = textures[key];
        material.needsUpdate = true;
      };
    }
  }]);

  return Helpers;
}();



/***/ }),

/***/ "./src/js/utils/keyboard.js":
/*!**********************************!*\
  !*** ./src/js/utils/keyboard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Keyboard; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ALIAS = {
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'space': 32,
  'tab': 9,
  'escape': 27
};

var Keyboard =
/*#__PURE__*/
function () {
  function Keyboard(domElement) {
    var _this = this;

    _classCallCheck(this, Keyboard);

    this.domElement = domElement || document;
    this.keyCodes = {}; // bind keyEvents

    this.domElement.addEventListener('keydown', function (event) {
      return _this.onKeyChange(event);
    }, false);
    this.domElement.addEventListener('keyup', function (event) {
      return _this.onKeyChange(event);
    }, false); // bind window blur

    window.addEventListener('blur', function () {
      return _this.onBlur;
    }, false);
  }

  _createClass(Keyboard, [{
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      this.domElement.removeEventListener('keydown', function (event) {
        return _this2.onKeyChange(event);
      }, false);
      this.domElement.removeEventListener('keyup', function (event) {
        return _this2.onKeyChange(event);
      }, false); // unbind window blur event

      window.removeEventListener('blur', function () {
        return _this2.onBlur;
      }, false);
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      for (var prop in this.keyCodes) {
        this.keyCodes[prop] = false;
      }
    }
  }, {
    key: "onKeyChange",
    value: function onKeyChange(event) {
      // log to debug
      //console.log('onKeyChange', event, event.keyCode, event.shiftKey, event.ctrlKey, event.altKey, event.metaKey)
      // update this.keyCodes
      var keyCode = event.keyCode;
      this.keyCodes[keyCode] = event.type === 'keydown';
    }
  }, {
    key: "pressed",
    value: function pressed(keyDesc) {
      var keys = keyDesc.split('+');

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var pressed = false;

        if (Object.keys(ALIAS).indexOf(key) != -1) {
          pressed = this.keyCodes[ALIAS[key]];
        } else {
          pressed = this.keyCodes[key.toUpperCase().charCodeAt(0)];
        }

        if (!pressed) return false;
      }

      return true;
    }
  }, {
    key: "eventMatches",
    value: function eventMatches(event, keyDesc) {
      var aliases = ALIAS;
      var aliasKeys = Object.keys(aliases);
      var keys = keyDesc.split('+'); // log to debug
      // console.log('eventMatches', event, event.keyCode, event.shiftKey, event.ctrlKey, event.altKey, event.metaKey)

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var pressed = false;

        if (key === 'shift') {
          pressed = event.shiftKey ? true : false;
        } else if (key === 'ctrl') {
          pressed = event.ctrlKey ? true : false;
        } else if (key === 'alt') {
          pressed = event.altKey ? true : false;
        } else if (key === 'meta') {
          pressed = event.metaKey ? true : false;
        } else if (aliasKeys.indexOf(key) !== -1) {
          pressed = event.keyCode === aliases[key];
        } else if (event.keyCode === key.toUpperCase().charCodeAt(0)) {
          pressed = true;
        }

        if (!pressed) return false;
      }

      return true;
    }
  }]);

  return Keyboard;
}();



/***/ }),

/***/ "./src/js/utils/orbitControls.js":
/*!***************************************!*\
  !*** ./src/js/utils/orbitControls.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (THREE) {
  var MOUSE = THREE.MOUSE;
  if (!MOUSE) MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
  };
  /**
   * @author qiao / https://github.com/qiao
   * @author mrdoob / http://mrdoob.com
   * @author alteredq / http://alteredqualia.com/
   * @author WestLangley / http://github.com/WestLangley
   * @author erich666 / http://erichaines.com
   */

  /*global THREE, console */

  function OrbitConstraint(object) {
    this.object = object; // "target" sets the location of focus, where the object orbits around
    // and where it pans with respect to.

    this.target = new THREE.Vector3(); // Limits to how far you can dolly in and out ( PerspectiveCamera only )

    this.minDistance = 0;
    this.maxDistance = Infinity; // Limits to how far you can zoom in and out ( OrthographicCamera only )

    this.minZoom = 0;
    this.maxZoom = Infinity; // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.

    this.minPolarAngle = 0; // radians

    this.maxPolarAngle = Math.PI; // radians
    // How far you can orbit horizontally, upper and lower limits.
    // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].

    this.minAzimuthAngle = -Infinity; // radians

    this.maxAzimuthAngle = Infinity; // radians
    // Set to true to enable damping (inertia)
    // If damping is enabled, you must call controls.update() in your animation loop

    this.enableDamping = false;
    this.dampingFactor = 0.25; ////////////
    // internals

    var scope = this;
    var EPS = 0.000001; // Current position in spherical coordinate system.

    var theta;
    var phi; // Pending changes

    var phiDelta = 0;
    var thetaDelta = 0;
    var scale = 1;
    var panOffset = new THREE.Vector3();
    var zoomChanged = false; // API

    this.getPolarAngle = function () {
      return phi;
    };

    this.getAzimuthalAngle = function () {
      return theta;
    };

    this.rotateLeft = function (angle) {
      thetaDelta -= angle;
    };

    this.rotateUp = function (angle) {
      phiDelta -= angle;
    }; // pass in distance in world space to move left


    this.panLeft = function () {
      var v = new THREE.Vector3();
      return function panLeft(distance) {
        var te = this.object.matrix.elements; // get X column of matrix

        v.set(te[0], te[1], te[2]);
        v.multiplyScalar(-distance);
        panOffset.add(v);
      };
    }(); // pass in distance in world space to move up


    this.panUp = function () {
      var v = new THREE.Vector3();
      return function panUp(distance) {
        var te = this.object.matrix.elements; // get Y column of matrix

        v.set(te[4], te[5], te[6]);
        v.multiplyScalar(distance);
        panOffset.add(v);
      };
    }(); // pass in x,y of change desired in pixel space,
    // right and down are positive


    this.pan = function (deltaX, deltaY, screenWidth, screenHeight) {
      if (scope.object instanceof THREE.PerspectiveCamera) {
        // perspective
        var position = scope.object.position;
        var offset = position.clone().sub(scope.target);
        var targetDistance = offset.length(); // half of the fov is center to top of screen

        targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0); // we actually don't use screenWidth, since perspective camera is fixed to screen height

        scope.panLeft(2 * deltaX * targetDistance / screenHeight);
        scope.panUp(2 * deltaY * targetDistance / screenHeight);
      } else if (scope.object instanceof THREE.OrthographicCamera) {
        // orthographic
        scope.panLeft(deltaX * (scope.object.right - scope.object.left) / screenWidth);
        scope.panUp(deltaY * (scope.object.top - scope.object.bottom) / screenHeight);
      } else {
        // camera neither orthographic or perspective
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
      }
    };

    this.dollyIn = function (dollyScale) {
      if (scope.object instanceof THREE.PerspectiveCamera) {
        scale /= dollyScale;
      } else if (scope.object instanceof THREE.OrthographicCamera) {
        scope.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom * dollyScale));
        scope.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      }
    };

    this.dollyOut = function (dollyScale) {
      if (scope.object instanceof THREE.PerspectiveCamera) {
        scale *= dollyScale;
      } else if (scope.object instanceof THREE.OrthographicCamera) {
        scope.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / dollyScale));
        scope.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      }
    };

    this.update = function () {
      var offset = new THREE.Vector3(); // so camera.up is the orbit axis

      var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
      var quatInverse = quat.clone().inverse();
      var lastPosition = new THREE.Vector3();
      var lastQuaternion = new THREE.Quaternion();
      return function () {
        var position = this.object.position;
        offset.copy(position).sub(this.target); // rotate offset to "y-axis-is-up" space

        offset.applyQuaternion(quat); // angle from z-axis around y-axis

        theta = Math.atan2(offset.x, offset.z); // angle from y-axis

        phi = Math.atan2(Math.sqrt(offset.x * offset.x + offset.z * offset.z), offset.y);
        theta += thetaDelta;
        phi += phiDelta; // restrict theta to be between desired limits

        theta = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, theta)); // restrict phi to be between desired limits

        phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, phi)); // restrict phi to be betwee EPS and PI-EPS

        phi = Math.max(EPS, Math.min(Math.PI - EPS, phi));
        var radius = offset.length() * scale; // restrict radius to be between desired limits

        radius = Math.max(this.minDistance, Math.min(this.maxDistance, radius)); // move target to panned location

        this.target.add(panOffset);
        offset.x = radius * Math.sin(phi) * Math.sin(theta);
        offset.y = radius * Math.cos(phi);
        offset.z = radius * Math.sin(phi) * Math.cos(theta); // rotate offset back to "camera-up-vector-is-up" space

        offset.applyQuaternion(quatInverse);
        position.copy(this.target).add(offset);
        this.object.lookAt(this.target);

        if (this.enableDamping === true) {
          thetaDelta *= 1 - this.dampingFactor;
          phiDelta *= 1 - this.dampingFactor;
        } else {
          thetaDelta = 0;
          phiDelta = 0;
        }

        scale = 1;
        panOffset.set(0, 0, 0); // update condition is:
        // min(camera displacement, camera rotation in radians)^2 > EPS
        // using small-angle approximation cos(x/2) = 1 - x^2 / 8

        if (zoomChanged || lastPosition.distanceToSquared(this.object.position) > EPS || 8 * (1 - lastQuaternion.dot(this.object.quaternion)) > EPS) {
          lastPosition.copy(this.object.position);
          lastQuaternion.copy(this.object.quaternion);
          zoomChanged = false;
          return true;
        }

        return false;
      };
    }();
  }

  ; // This set of controls performs orbiting, dollying (zooming), and panning. It maintains
  // the "up" direction as +Y, unlike the TrackballControls. Touch on tablet and phones is
  // supported.
  //
  //    Orbit - left mouse / touch: one finger move
  //    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
  //    Pan - right mouse, or arrow keys / touch: three finter swipe

  function OrbitControls(object, domElement) {
    var constraint = new OrbitConstraint(object);
    this.domElement = domElement !== undefined ? domElement : document; // API

    Object.defineProperty(this, 'constraint', {
      get: function get() {
        return constraint;
      }
    });

    this.getPolarAngle = function () {
      return constraint.getPolarAngle();
    };

    this.getAzimuthalAngle = function () {
      return constraint.getAzimuthalAngle();
    }; // Set to false to disable this control


    this.enabled = true; // center is old, deprecated; use "target" instead

    this.center = this.target; // This option actually enables dollying in and out; left as "zoom" for
    // backwards compatibility.
    // Set to false to disable zooming

    this.enableZoom = true;
    this.zoomSpeed = 1.0; // Set to false to disable rotating

    this.enableRotate = true;
    this.rotateSpeed = 1.0; // Set to false to disable panning

    this.enablePan = true;
    this.keyPanSpeed = 7.0; // pixels moved per arrow key push
    // Set to true to automatically rotate around the target
    // If auto-rotate is enabled, you must call controls.update() in your animation loop

    this.autoRotate = false;
    this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60
    // Set to false to disable use of the keys

    this.enableKeys = true; // The four arrow keys

    this.keys = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      BOTTOM: 40
    }; // Mouse buttons

    this.mouseButtons = {
      ORBIT: THREE.MOUSE.LEFT,
      ZOOM: THREE.MOUSE.MIDDLE,
      PAN: THREE.MOUSE.RIGHT
    }; ////////////
    // internals

    var scope = this;
    var rotateStart = new THREE.Vector2();
    var rotateEnd = new THREE.Vector2();
    var rotateDelta = new THREE.Vector2();
    var panStart = new THREE.Vector2();
    var panEnd = new THREE.Vector2();
    var panDelta = new THREE.Vector2();
    var dollyStart = new THREE.Vector2();
    var dollyEnd = new THREE.Vector2();
    var dollyDelta = new THREE.Vector2();
    var STATE = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_DOLLY: 4,
      TOUCH_PAN: 5
    };
    var state = STATE.NONE; // for reset

    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom; // events

    var changeEvent = {
      type: 'change'
    };
    var startEvent = {
      type: 'start'
    };
    var endEvent = {
      type: 'end'
    }; // pass in x,y of change desired in pixel space,
    // right and down are positive

    function pan(deltaX, deltaY) {
      var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
      constraint.pan(deltaX, deltaY, element.clientWidth, element.clientHeight);
    }

    this.update = function () {
      if (this.autoRotate && state === STATE.NONE) {
        constraint.rotateLeft(getAutoRotationAngle());
      }

      if (constraint.update() === true) {
        this.dispatchEvent(changeEvent);
      }
    };

    this.reset = function () {
      state = STATE.NONE;
      this.target.copy(this.target0);
      this.object.position.copy(this.position0);
      this.object.zoom = this.zoom0;
      this.object.updateProjectionMatrix();
      this.dispatchEvent(changeEvent);
      this.update();
    };

    function getAutoRotationAngle() {
      return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
    }

    function getZoomScale() {
      return Math.pow(0.95, scope.zoomSpeed);
    }

    function onMouseDown(event) {
      if (scope.enabled === false) return;
      event.preventDefault();

      if (event.button === scope.mouseButtons.ORBIT) {
        if (scope.enableRotate === false) return;
        state = STATE.ROTATE;
        rotateStart.set(event.clientX, event.clientY);
      } else if (event.button === scope.mouseButtons.ZOOM) {
        if (scope.enableZoom === false) return;
        state = STATE.DOLLY;
        dollyStart.set(event.clientX, event.clientY);
      } else if (event.button === scope.mouseButtons.PAN) {
        if (scope.enablePan === false) return;
        state = STATE.PAN;
        panStart.set(event.clientX, event.clientY);
      }

      if (state !== STATE.NONE) {
        document.addEventListener('mousemove', onMouseMove, false);
        document.addEventListener('mouseup', onMouseUp, false);
        scope.dispatchEvent(startEvent);
      }
    }

    function onMouseMove(event) {
      if (scope.enabled === false) return;
      event.preventDefault();
      var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

      if (state === STATE.ROTATE) {
        if (scope.enableRotate === false) return;
        rotateEnd.set(event.clientX, event.clientY);
        rotateDelta.subVectors(rotateEnd, rotateStart); // rotating across whole screen goes 360 degrees around

        constraint.rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed); // rotating up and down along whole screen attempts to go 360, but limited to 180

        constraint.rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
        rotateStart.copy(rotateEnd);
      } else if (state === STATE.DOLLY) {
        if (scope.enableZoom === false) return;
        dollyEnd.set(event.clientX, event.clientY);
        dollyDelta.subVectors(dollyEnd, dollyStart);

        if (dollyDelta.y > 0) {
          constraint.dollyIn(getZoomScale());
        } else if (dollyDelta.y < 0) {
          constraint.dollyOut(getZoomScale());
        }

        dollyStart.copy(dollyEnd);
      } else if (state === STATE.PAN) {
        if (scope.enablePan === false) return;
        panEnd.set(event.clientX, event.clientY);
        panDelta.subVectors(panEnd, panStart);
        pan(panDelta.x, panDelta.y);
        panStart.copy(panEnd);
      }

      if (state !== STATE.NONE) scope.update();
    }

    function onMouseUp()
    /* event */
    {
      if (scope.enabled === false) return;
      document.removeEventListener('mousemove', onMouseMove, false);
      document.removeEventListener('mouseup', onMouseUp, false);
      scope.dispatchEvent(endEvent);
      state = STATE.NONE;
    }

    function onMouseWheel(event) {
      if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE) return;
      event.preventDefault();
      event.stopPropagation();
      var delta = 0;

      if (event.wheelDelta !== undefined) {
        // WebKit / Opera / Explorer 9
        delta = event.wheelDelta;
      } else if (event.detail !== undefined) {
        // Firefox
        delta = -event.detail;
      }

      if (delta > 0) {
        constraint.dollyOut(getZoomScale());
      } else if (delta < 0) {
        constraint.dollyIn(getZoomScale());
      }

      scope.update();
      scope.dispatchEvent(startEvent);
      scope.dispatchEvent(endEvent);
    }

    function onKeyDown(event) {
      if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;

      switch (event.keyCode) {
        case scope.keys.UP:
          pan(0, scope.keyPanSpeed);
          scope.update();
          break;

        case scope.keys.BOTTOM:
          pan(0, -scope.keyPanSpeed);
          scope.update();
          break;

        case scope.keys.LEFT:
          pan(scope.keyPanSpeed, 0);
          scope.update();
          break;

        case scope.keys.RIGHT:
          pan(-scope.keyPanSpeed, 0);
          scope.update();
          break;
      }
    }

    function touchstart(event) {
      if (scope.enabled === false) return;

      switch (event.touches.length) {
        case 1:
          // one-fingered touch: rotate
          if (scope.enableRotate === false) return;
          state = STATE.TOUCH_ROTATE;
          rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
          break;

        case 2:
          // two-fingered touch: dolly
          if (scope.enableZoom === false) return;
          state = STATE.TOUCH_DOLLY;
          var dx = event.touches[0].pageX - event.touches[1].pageX;
          var dy = event.touches[0].pageY - event.touches[1].pageY;
          var distance = Math.sqrt(dx * dx + dy * dy);
          dollyStart.set(0, distance);
          break;

        case 3:
          // three-fingered touch: pan
          if (scope.enablePan === false) return;
          state = STATE.TOUCH_PAN;
          panStart.set(event.touches[0].pageX, event.touches[0].pageY);
          break;

        default:
          state = STATE.NONE;
      }

      if (state !== STATE.NONE) scope.dispatchEvent(startEvent);
    }

    function touchmove(event) {
      if (scope.enabled === false) return;
      event.preventDefault();
      event.stopPropagation();
      var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

      switch (event.touches.length) {
        case 1:
          // one-fingered touch: rotate
          if (scope.enableRotate === false) return;
          if (state !== STATE.TOUCH_ROTATE) return;
          rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
          rotateDelta.subVectors(rotateEnd, rotateStart); // rotating across whole screen goes 360 degrees around

          constraint.rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed); // rotating up and down along whole screen attempts to go 360, but limited to 180

          constraint.rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
          rotateStart.copy(rotateEnd);
          scope.update();
          break;

        case 2:
          // two-fingered touch: dolly
          if (scope.enableZoom === false) return;
          if (state !== STATE.TOUCH_DOLLY) return;
          var dx = event.touches[0].pageX - event.touches[1].pageX;
          var dy = event.touches[0].pageY - event.touches[1].pageY;
          var distance = Math.sqrt(dx * dx + dy * dy);
          dollyEnd.set(0, distance);
          dollyDelta.subVectors(dollyEnd, dollyStart);

          if (dollyDelta.y > 0) {
            constraint.dollyOut(getZoomScale());
          } else if (dollyDelta.y < 0) {
            constraint.dollyIn(getZoomScale());
          }

          dollyStart.copy(dollyEnd);
          scope.update();
          break;

        case 3:
          // three-fingered touch: pan
          if (scope.enablePan === false) return;
          if (state !== STATE.TOUCH_PAN) return;
          panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
          panDelta.subVectors(panEnd, panStart);
          pan(panDelta.x, panDelta.y);
          panStart.copy(panEnd);
          scope.update();
          break;

        default:
          state = STATE.NONE;
      }
    }

    function touchend()
    /* event */
    {
      if (scope.enabled === false) return;
      scope.dispatchEvent(endEvent);
      state = STATE.NONE;
    }

    function contextmenu(event) {
      event.preventDefault();
    }

    this.dispose = function () {
      this.domElement.removeEventListener('contextmenu', contextmenu, false);
      this.domElement.removeEventListener('mousedown', onMouseDown, false);
      this.domElement.removeEventListener('mousewheel', onMouseWheel, false);
      this.domElement.removeEventListener('MozMousePixelScroll', onMouseWheel, false); // firefox

      this.domElement.removeEventListener('touchstart', touchstart, false);
      this.domElement.removeEventListener('touchend', touchend, false);
      this.domElement.removeEventListener('touchmove', touchmove, false);
      document.removeEventListener('mousemove', onMouseMove, false);
      document.removeEventListener('mouseup', onMouseUp, false);
      window.removeEventListener('keydown', onKeyDown, false);
    };

    this.domElement.addEventListener('contextmenu', contextmenu, false);
    this.domElement.addEventListener('mousedown', onMouseDown, false);
    this.domElement.addEventListener('mousewheel', onMouseWheel, false);
    this.domElement.addEventListener('MozMousePixelScroll', onMouseWheel, false); // firefox

    this.domElement.addEventListener('touchstart', touchstart, false);
    this.domElement.addEventListener('touchend', touchend, false);
    this.domElement.addEventListener('touchmove', touchmove, false);
    window.addEventListener('keydown', onKeyDown, false); // force an update at start

    this.update();
  }

  ;
  OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);
  OrbitControls.prototype.constructor = OrbitControls;
  Object.defineProperties(OrbitControls.prototype, {
    object: {
      get: function get() {
        return this.constraint.object;
      }
    },
    target: {
      get: function get() {
        return this.constraint.target;
      },
      set: function set(value) {
        console.warn('THREE.OrbitControls: target is now immutable. Use target.set() instead.');
        this.constraint.target.copy(value);
      }
    },
    minDistance: {
      get: function get() {
        return this.constraint.minDistance;
      },
      set: function set(value) {
        this.constraint.minDistance = value;
      }
    },
    maxDistance: {
      get: function get() {
        return this.constraint.maxDistance;
      },
      set: function set(value) {
        this.constraint.maxDistance = value;
      }
    },
    minZoom: {
      get: function get() {
        return this.constraint.minZoom;
      },
      set: function set(value) {
        this.constraint.minZoom = value;
      }
    },
    maxZoom: {
      get: function get() {
        return this.constraint.maxZoom;
      },
      set: function set(value) {
        this.constraint.maxZoom = value;
      }
    },
    minPolarAngle: {
      get: function get() {
        return this.constraint.minPolarAngle;
      },
      set: function set(value) {
        this.constraint.minPolarAngle = value;
      }
    },
    maxPolarAngle: {
      get: function get() {
        return this.constraint.maxPolarAngle;
      },
      set: function set(value) {
        this.constraint.maxPolarAngle = value;
      }
    },
    minAzimuthAngle: {
      get: function get() {
        return this.constraint.minAzimuthAngle;
      },
      set: function set(value) {
        this.constraint.minAzimuthAngle = value;
      }
    },
    maxAzimuthAngle: {
      get: function get() {
        return this.constraint.maxAzimuthAngle;
      },
      set: function set(value) {
        this.constraint.maxAzimuthAngle = value;
      }
    },
    enableDamping: {
      get: function get() {
        return this.constraint.enableDamping;
      },
      set: function set(value) {
        this.constraint.enableDamping = value;
      }
    },
    dampingFactor: {
      get: function get() {
        return this.constraint.dampingFactor;
      },
      set: function set(value) {
        this.constraint.dampingFactor = value;
      }
    },
    // backward compatibility
    noZoom: {
      get: function get() {
        console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
        return !this.enableZoom;
      },
      set: function set(value) {
        console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
        this.enableZoom = !value;
      }
    },
    noRotate: {
      get: function get() {
        console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
        return !this.enableRotate;
      },
      set: function set(value) {
        console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
        this.enableRotate = !value;
      }
    },
    noPan: {
      get: function get() {
        console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
        return !this.enablePan;
      },
      set: function set(value) {
        console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
        this.enablePan = !value;
      }
    },
    noKeys: {
      get: function get() {
        console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
        return !this.enableKeys;
      },
      set: function set(value) {
        console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
        this.enableKeys = !value;
      }
    },
    staticMoving: {
      get: function get() {
        console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
        return !this.constraint.enableDamping;
      },
      set: function set(value) {
        console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
        this.constraint.enableDamping = !value;
      }
    },
    dynamicDampingFactor: {
      get: function get() {
        console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
        return this.constraint.dampingFactor;
      },
      set: function set(value) {
        console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
        this.constraint.dampingFactor = value;
      }
    }
  });
  return OrbitControls;
};

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/app.js */"./src/js/app.js");


/***/ })

},[[0,"runtime","vendors"]]]);