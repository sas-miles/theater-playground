const THREE_MODULE_URL = "https://unpkg.com/three@0.152.2/build/three.module.js";
const ORBIT_CONTROLS_URL = "https://unpkg.com/three@0.152.2/examples/jsm/controls/OrbitControls.js";

async function main() {
  const { default: THREE } = await import(THREE_MODULE_URL);
  const { OrbitControls } = await import(ORBIT_CONTROLS_URL);

  // Your JavaScript code using Three.js and OrbitControls goes here
}

main().catch((error) => console.error('An error occurred:', error));


import * as THREE from 'three';

/* Your JavaScript code using Three.js and addons goes here


//Scene
const secene = new Three.Scene()

//Sphere
const geometry = new THREE.SphereGeometry( 3, 64, 64 )
const material = new THREE.MeshStandardMaterial({
    color: '#00ff83'
})
const mesh = new Three.Mesh(geometry, material)
scene.add(mesh)

//Camera

const camera = new Three.PerspectiveCamera( 45, 1920/1080, 1000)

console.log("hello");*/
