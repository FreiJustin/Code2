"use strict";
var FudgeFirst;
(function (FudgeFirst) {
    var f = FudgeCore;
    const nodeCube = new f.Node("Node");
    const nodeGround = new f.Node("NodeGround");
    window.addEventListener("load", handleLoad);
    let viewport;
    function handleLoad(_event) {
        const canvas = document.querySelector("canvas");
        const camera = new f.ComponentCamera();
        //Cube
        const mesh = new f.MeshCube("cube");
        const cmpMesh = new f.ComponentMesh(mesh);
        cmpMesh.mtxPivot.translateY(0.5);
        cmpMesh.mtxPivot.scaleZ(4);
        nodeCube.addComponent(cmpMesh);
        const material = new f.Material("Material", f.ShaderLit);
        const cmpMaterial = new f.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(0, 0, 1, 1);
        nodeCube.addComponent(cmpMaterial);
        const cmpTransform = new f.ComponentTransform();
        nodeCube.addComponent(cmpTransform);
        //Ground
        const groundMesh = new f.MeshQuad("Ground");
        const cmpGround = new f.ComponentMesh(groundMesh);
        cmpGround.mtxPivot.rotateX(-90, true);
        cmpGround.mtxPivot.scaleY(50);
        cmpGround.mtxPivot.scaleX(50);
        nodeGround.addComponent(cmpGround);
        const groundMaterial = new f.Material("Ground Material", f.ShaderLitTextured);
        const cmpGroundMaterial = new f.ComponentMaterial(groundMaterial);
        nodeGround.addComponent(cmpGroundMaterial);
        nodeGround.addChild(nodeCube);
        camera.mtxPivot.translateZ(15);
        camera.mtxPivot.translateY(15);
        console.log(camera);
        viewport = new f.Viewport();
        viewport.initialize("Viewport", nodeGround, camera, canvas);
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        f.Loop.start();
    }
    let yTranslation = 0;
    function update() {
        const tSpeed = 3 / 1; //units per seconds
        const rSpeed = 360 / 3; // degrees per seconds
        const jumpHeight = 2;
        const fallSpeed = 3 / 1;
        const frameTimeInMillieSeconds = f.Loop.timeFrameGame;
        const frameTimeInSeconds = (frameTimeInMillieSeconds / 1000);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W])) {
            nodeCube.mtxLocal.translateZ(tSpeed * frameTimeInSeconds);
        }
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.S])) {
            nodeCube.mtxLocal.translateZ(-tSpeed * frameTimeInSeconds);
        }
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.D])) {
            nodeCube.mtxLocal.rotateY(rSpeed * frameTimeInSeconds);
        }
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.A])) {
            nodeCube.mtxLocal.rotateY(-rSpeed * frameTimeInSeconds);
        }
        //fall system
        if (yTranslation > 0) {
            nodeCube.mtxLocal.translateY(-fallSpeed * frameTimeInSeconds);
            yTranslation -= fallSpeed;
        }
        // //jump system
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.SPACE]) && yTranslation <= 0) {
            nodeCube.mtxLocal.translateY(jumpHeight);
            yTranslation = jumpHeight;
        }
        const up = f.Vector3.Y();
        viewport.camera.mtxPivot.lookAt(nodeCube.mtxWorld.translation);
        f.Recycler.store(up);
        viewport.draw();
    }
})(FudgeFirst || (FudgeFirst = {}));
