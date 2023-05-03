import * as THREE from 'three';
import { OrbitControls } from 'three/addons/OrbitControls.js';

// Your JavaScript code using Three.js and addons goes here


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

console.log("hello");