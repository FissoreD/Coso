import { Mesh, MeshBuilder, Scene } from "babylonjs";

export class Environment extends Mesh {
  shape: Mesh;

  constructor(scene: Scene) {
    super("ground", scene)
    this.shape = this.buildShape()
  }

  buildShape(): Mesh {
    return MeshBuilder.CreateBox(this.name + "box", {
      width: 10, height: 1, depth: 1
    })
  }
}