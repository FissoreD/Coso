import { ArcRotateCamera, Engine, HemisphericLight, Scene, Vector3 } from "babylonjs";
import { Environment } from "./environment";
import { MainCharacter } from "./mainCharacter";

export let initFunction = () => {
  let canvas = document.getElementById("rootCanvas") as HTMLCanvasElement;
  let engine = new Engine(canvas);
  let scene = new Scene(engine);
  let ground = new Environment(scene);
  let light = new HemisphericLight("hemiLight", new Vector3(0, 1, 0), scene);
  let avatar = new MainCharacter({
    name: "Main",
    scene,
    position: new Vector3(0, 1, 0)
  })


  // Add a camera to the scene and attach it to the canvas
  // TODO : replace with follow camera
  var camera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 4, Vector3.Zero(), scene);
  // let camera = new FollowCamera("camera", new Vector3(0, 10, 0), scene, avatar);
  camera.attachControl(canvas, true);
  engine.runRenderLoop(() => scene.render());
}