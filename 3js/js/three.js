import * as THREE from '../js/libs/three.module.js';
// import Stats from '../node_modules/three/examples/jsm/libs/stats.module.js';
// import { OrbitControls } from '../node_modules/three/examples/jsm/Addons/controls/OrbitControls.js'

// import * as THREE from './three/libs/three.module.js';
// import Stats from './three/libs/stats.module.js';
// import { OrbitControls } from './three/libs/OrbitControls.js';

let container, stats;
let camera, scene, renderer, controls;
let geometry, material, mesh;

const curves = [];
const numRows = 1700; // Number of rows of curves
const particlesPerRow = 10;

init();

function init() {
	container = document.createElement('div');
	document.body.appendChild(container);

	camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 50000);
    
    // Position the camera at a specific point
    camera.position.set(20394, 5005, 2730);  // Set the x, y, z coordinates for the camera

    // Make the camera look at a specific point in the scene
    camera.lookAt(new THREE.Vector3(10, 0, 8));  // Make the camera look at the origin or any other point

    // Update the camera's projection matrix if necessary
    camera.updateProjectionMatrix();

		scene = new THREE.Scene();

		// Create a grid of Bézier curves for the particle river
		for (let i = 0; i < numRows; i++) {
            const yOffset = (i / numRows) * 3 - 1; // Vary the y-position for each row
            const xOffset = (i / numRows) * 2 - 1; // Vary the x-position for each row

            const curve = new THREE.CubicBezierCurve3(
            new THREE.Vector3(-1 + xOffset, yOffset, Math.random() * 0.5 - 0.25), // Start point with xOffset
            new THREE.Vector3(-0.5 + xOffset + Math.random(), yOffset + Math.random(), Math.random()), // Control point 1 with xOffset
            new THREE.Vector3(0.5 + xOffset + Math.random(), yOffset + Math.random(), Math.random()), // Control point 2 with xOffset
            new THREE.Vector3(1 + xOffset, yOffset, Math.random() * 0.5 - 0.25) // End point with xOffset
            );
        
            curves.push(curve);
        }

		geometry = new THREE.InstancedBufferGeometry();
		const circleGeometry = new THREE.CircleGeometry(1, 6);
		geometry.index = circleGeometry.index;
		geometry.attributes = circleGeometry.attributes;

		const totalParticles = numRows * particlesPerRow;
		const translateArray = new Float32Array(totalParticles * 3);

		let index = 0;
		for (let i = 0; i < numRows; i++) {
			for (let j = 0; j < particlesPerRow; j++) {
				const t = j / particlesPerRow;
				const position = curves[i].getPoint(t);
				translateArray[index++] = position.x;
				translateArray[index++] = position.y;
				translateArray[index++] = position.z;
			}
		}

		geometry.setAttribute('translate', new THREE.InstancedBufferAttribute(translateArray, 3));

		material = new THREE.RawShaderMaterial({
			uniforms: {
				'map': { value: new THREE.TextureLoader().load('textures/sprites/circle.png') },
				'time': { value: 0.0 }
			},
			vertexShader: document.getElementById('vshader').textContent,
			fragmentShader: document.getElementById('fshader').textContent,
			depthTest: true,
			depthWrite: true
		});

		mesh = new THREE.Mesh(geometry, material);
		mesh.scale.set(50000, 5000, 5000);
		scene.add(mesh);

		renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setAnimationLoop(animate);
		container.appendChild(renderer.domElement);

		// stats = new Stats();
		// container.appendChild(stats.dom);

		// controls = new OrbitControls(camera, renderer.domElement);
		// controls.enableDamping = true;
		// controls.dampingFactor = 0.05;

		window.addEventListener('resize', onWindowResize);
    }

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	const time = performance.now() * 0.0002;

	const translateArray = geometry.attributes.translate.array;
	let index = 0;

	for (let i = 0; i < numRows; i++) {
		for (let j = 0; j < particlesPerRow; j++) {
			// Update particle positions along the Bézier curve
			const t = (j / particlesPerRow + time * 0.1) % 1;
			const position = curves[i].getPoint(t);
			translateArray[index++] = position.x;
			translateArray[index++] = position.y;
			translateArray[index++] = position.z;
		}
	}

	geometry.attributes.translate.needsUpdate = true;

	material.uniforms['time'].value = time;

	// controls.update();
	renderer.render(scene, camera);
	// stats.update();
}