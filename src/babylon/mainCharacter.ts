import { Scene, Vector3, Ray, TransformNode, Mesh, Color3, Color4, UniversalCamera, Quaternion, AnimationGroup, ExecuteCodeAction, ActionManager, ParticleSystem, Texture, SphereParticleEmitter, Sound, Observable, ShadowGenerator, MeshBuilder, PhysicsImpostor } from "babylonjs";
import { Avatar, ParametersAvatar } from "./avatar";
import { Controller } from "./controller";

export class MainCharacter extends Avatar {
  //const values
  private static readonly PLAYER_SPEED: number = 0.45;
  private static readonly JUMP_FORCE: number = 0.80;
  private static readonly GRAVITY: number = -2.8;
  private static readonly DASH_FACTOR: number = 2.5;
  private static readonly DASH_TIME: number = 10; //how many frames the dash lasts
  private static readonly DOWN_TILT: Vector3 = new Vector3(0.8290313946973066, 0, 0);
  private static readonly ORIGINAL_TILT: Vector3 = new Vector3(0.5934119456780721, 0, 0);

  //gravity, ground detection, jumping
  private _gravity: Vector3 = new Vector3();
  private _lastGroundPos: Vector3 = Vector3.Zero(); // keep track of the last grounded position
  private _grounded: boolean = true;
  private _jumpCount: number = 1;

  constructor(scene: Scene) {
      super({name: "Main", scene: scene, position: new Vector3(0, 2, 0)});
  }
}