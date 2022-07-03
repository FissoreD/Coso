import { int, Mesh, MeshBuilder, PhysicsImpostor, Scene, Vector3 } from "babylonjs";

export class Environment {
  shape: Array<Mesh>;
  scene: Scene;
  name: string;

  constructor(scene: Scene) {
    this.scene = scene;
    this.name = "Ground";
    this.shape = this.buildShape(3);
  }

  buildShape(n: int): Array<Mesh> {
    let m : Array<Mesh> = [];
    for(var i = 0; i < n; i++) {
      m[i] = MeshBuilder.CreateBox(this.name + "box" + i, {
        width: 10, height: 1, depth: 1
      });
      m[i].position = new Vector3(i*10, i, 0);
      m[i].physicsImpostor = new PhysicsImpostor(m[i], PhysicsImpostor.BoxImpostor, { mass: 0 }, this.scene);
    }
    return m;
  }
}