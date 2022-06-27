import { MeshBuilder } from "babylonjs";
import { Avatar, ParametersAvatar } from "./avatar";

export class MainCharacter extends Avatar {
  constructor(p: ParametersAvatar) {
    super(p);
  }

  buildShape() {
    return MeshBuilder.CreateSphere(this.name + "sphere", {
      diameter: 1
    });
  }
}