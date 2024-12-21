import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import { RoomEnvironment } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/environments/RoomEnvironment.js';

const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xAAAAAA);
scene.backgroundIntensity = 0;
const loader = new GLTFLoader();

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas, alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.outputEncoding = THREE.sRGBEncoding;

const pmremGenerator = new THREE.PMREMGenerator( renderer );
scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), 0.04 ).texture;

// const ambientLight = new THREE.AmbientLight(0xFFFFFF); // Adjust color as needed
// scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
// directionalLight.position.set(10, 10, 10); // Adjust position as needed
// scene.add(directionalLight);

let mixer;
let gltfCamera;
loader.load(
	"../untitled.glb",
	function ( gltf ) {
        const nurbsPathMesh = gltf.scene.getObjectByName("NurbsPath");

		scene.add( gltf.scene );

        mixer = new THREE.AnimationMixer(gltf.scene);
        const clips = gltf.animations;
        const clip = THREE.AnimationClip.findByName(clips, "Sphere");
        const action = mixer.clipAction(clip);
        action.play();

        const cameraClip = THREE.AnimationClip.findByName(gltf.animations, "CameraAction"); // Replace with actual animation name
        const cameraAction = mixer.clipAction(cameraClip);
        cameraAction.setLoop(true);
        cameraAction.play();
        

        // Use the camera from the GLTF file
        gltfCamera = gltf.cameras[0]; // Assuming there's only one camera
        scene.add(gltfCamera);

	},
	// called while loading is progressing
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {
		console.log( 'An error happened' );
	}
);

const clock = new THREE.Clock();
function animate() {
	requestAnimationFrame( animate );
    if(mixer){
        mixer.update(clock.getDelta());
        renderer.render(scene, gltfCamera);
    }
}


animate();