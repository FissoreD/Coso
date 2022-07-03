import { ArcRotateCamera, CannonJSPlugin, Engine, FollowCamera, HemisphericLight, MeshBuilder, PhysicsImpostor, Scene, Vector3 } from "babylonjs";
import { Controller } from "./controller";
import { Environment } from "./environment";
import { MainCharacter } from "./mainCharacter";

export let initFunction = () => {
  window.CANNON = require( 'cannon' );

  let canvas = document.getElementById("rootCanvas") as HTMLCanvasElement;
  let engine = new Engine(canvas);
  let scene = new Scene(engine);
  var gravityVector = new Vector3(0,-9.81, 0);
  var physicsPlugin = new CannonJSPlugin();
  scene.enablePhysics(null, physicsPlugin);

  let ground = new Environment(scene);
  let light = new HemisphericLight("hemiLight", new Vector3(0, 1, 0), scene);
  let avatar = new MainCharacter(scene);
  let controller = new Controller(scene, avatar);

  let camera = new FollowCamera("camera", new Vector3(0, 5, 0), scene, avatar.shape);
  // The goal distance of camera from target
  camera.radius = 10;
  // The goal height of camera above local origin (centre) of target
  camera.heightOffset = 1;
  // The goal rotation of camera around local origin (centre) of target in x y plane
  camera.rotationOffset = 180;
  // Acceleration of camera in moving from current to goal position
  camera.cameraAcceleration = 0.05;
  // The speed at which acceleration is halted
  camera.maxCameraSpeed = 10;
  // This attaches the camera to the canvas
  // camera.attachControl(true);
  camera.lockedTarget = avatar.shape;
  
  engine.runRenderLoop(() => scene.render());
}