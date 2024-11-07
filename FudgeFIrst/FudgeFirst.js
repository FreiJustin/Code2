"use strict";
var FudgeFirst;
(function (FudgeFirst) {
    var f = FudgeCore;
    const nodeCube = new f.Node("Node");
    const nodeGround = new f.Node("NodeGround");
    window.addEventListener("load", start);
    let viewport;
    function start(_event) {
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
        const cpmTransform = new f.ComponentTransform();
        nodeCube.addComponent(cpmTransform);
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
    let isJumping = false;
    let isFalling = false;
    function update() {
        const tSpeed = 3 / 1; //units per seconds
        const rSpeed = 360 / 3; // degrees per seconds
        const jumpSpeed = 2 / 1;
        const jumpTime = 1000;
        let jumpTimer = jumpTime;
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
        //jump system
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.SPACE]) && isJumping == false && isFalling == false) {
            isJumping = true;
        }
        if (isJumping == true && isFalling == false) {
            nodeCube.mtxLocal.translateY(jumpSpeed * frameTimeInSeconds);
            jumpTimer -= 1;
        }
        if (isFalling == true && isJumping == false) {
            nodeCube.mtxLocal.translateY(-jumpSpeed * frameTimeInSeconds);
            jumpTimer -= 1;
        }
        if (jumpTimer == 0) {
            switch (isFalling) {
                case false:
                    isFalling = true;
                    isJumping = false;
                    jumpTimer = jumpTime;
                case true:
                    isFalling = false;
                    jumpTimer = jumpTime;
            }
        }
        const up = f.Vector3.Y();
        viewport.camera.mtxPivot.lookAt(nodeCube.mtxWorld.translation);
        f.Recycler.store(up);
        viewport.draw();
    }
})(FudgeFirst || (FudgeFirst = {}));
