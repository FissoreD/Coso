import { Mesh, MeshBuilder, PhysicsImpostor, Scene, Vector3 } from "babylonjs";

export type ParametersAvatar = { name: string, scene: Scene, position?: Vector3 }

export abstract class Avatar {
  shape: Mesh;

  constructor(p: ParametersAvatar) {
    this.shape = MeshBuilder.CreateSphere(p.name, {diameter: 1, segments: 32}, p.scene);
    this.shape.position = p.position || Vector3.Zero();
    this.shape.physicsImpostor = new PhysicsImpostor(this.shape, PhysicsImpostor.SphereImpostor, { mass: 1, restitution: .6 }, p.scene);
  }
}