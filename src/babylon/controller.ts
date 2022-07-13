import { ActionManager, ExecuteCodeAction, Scene, Vector3 } from 'babylonjs';
import { Avatar } from './avatar';

export class Controller {
    public inputMap: any;
    private _scene: Scene;
    private avatar: Avatar;

    //jumping and dashing
    public jumpKeyDown: boolean = false;
    public dashing: boolean = false;

    constructor(scene: Scene, avatar: Avatar) {

        this._scene = scene;

        //scene action manager to detect inputs
        this._scene.actionManager = new ActionManager(this._scene);

        this.inputMap = {};
        this._scene.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnKeyDownTrigger, (evt) => {
            this.inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
        }));
        this._scene.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnKeyUpTrigger, (evt) => {
            this.inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
        }));

        //add to the scene an observable that calls updateFromKeyboard before rendering
        scene.onBeforeRenderObservable.add(() => {
            this._updateFromKeyboard();
        });
        this.avatar = avatar;
    }

    // Keyboard controls & Mobile controls
    //handles what is done when keys are pressed or if on mobile, when buttons are pressed
    private _updateFromKeyboard(): void {
        if (this.inputMap["a"] || this.inputMap["ArrowLeft"]) {
            this.avatar.shape.moveWithCollisions(new Vector3(-0.3, 0, 0))
        }
		else if(this.inputMap["d"] || this.inputMap["ArrowRight"]){ 
            this.avatar.shape.moveWithCollisions(new Vector3(0.3, 0, 0))
        }
		else if(this.inputMap[" "] || this.inputMap["Space"]){ this.avatar.shape.position.y += 0.3; }
    }
}