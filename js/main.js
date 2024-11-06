import * as THREE from 'three';

// Creamos la scene
const scene = new THREE.Scene();

// Creamos camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.add(camera);

camera.position.z = 5; // Mueve la camara hacia atras

// Creamos el render
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 1); //Color de fondo

// Creamos un cubo
document.body.appendChild(renderer.domElement);

// Intencidad de la luz
let ambientLight = new THREE.AmbientLight(0x404040, 1.0);

//ambientLight.position = camera.position;

// Añadimos la luz a la scene
scene.add(ambientLight);

//Luces direccionales
let sunLight = new THREE.DirectionalLight(0xdddddd, 1.0);
sunLight.position.y = 10;
scene.add(sunLight);

//Cubo
let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshLambertMaterial({ color: 'blue' }); // Material
let cube = new THREE.Mesh(geometry, material); // Mesh

scene.add(cube);

let render = function () {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    //Render 
    renderer.render(scene, camera);

    requestAnimationFrame(render);
}

render();
