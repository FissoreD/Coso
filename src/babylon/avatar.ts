import { Mesh, Scene, Vector3 } from "babylonjs";

export type ParametersAvatar = { name: string, scene: Scene, position?: Vector3 }

export abstract class Avatar extends Mesh {
  shape: Mesh;

  constructor(p: ParametersAvatar) {
    super(p.name, p.scene);
    this.shape = this.buildShape()
    this.shape.parent = this
    this.position = p.position || Vector3.Zero()
  }

  abstract buildShape(): Mesh;
}