import * as THREE from 'three';

const header = document.querySelector('.header')

var camera, scene, renderer;
var geometry, material, mesh;
var w = window.innerWidth
var h = window.innerHeight


function init() {
  camera = new THREE.PerspectiveCamera(70, w / h, 0.01, 10);
  camera.position.z = 1;

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xF8F6F0 );

  geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  material = new THREE.MeshNormalMaterial();

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ 
    antialias: true
  });

  renderer.setSize(w, h);
  header.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

function resize() {
  let w = w;
  let h = h;

  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

window.addEventListener('resize', resize);

init();
animate();
