namespace FudgeFirst {
    import f = FudgeCore;

    const nodeCube: f.Node = new f.Node("Node");
    const nodeGround: f.Node = new f.Node("NodeGround");

    window.addEventListener("load", handleLoad);
    let viewport: f.Viewport;

    function handleLoad(_event: Event): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        
        const camera: f.ComponentCamera = new f.ComponentCamera();

        //Cube
        const mesh: f.MeshCube = new f.MeshCube("cube");

        const cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        cmpMesh.mtxPivot.translateY(0.5);
        cmpMesh.mtxPivot.scaleZ(4);
        nodeCube.addComponent(cmpMesh);

        const material: f.Material = new f.Material("Material", f.ShaderLit);
        const cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(0, 0, 1, 1);
        nodeCube.addComponent(cmpMaterial);

        const cmpTransform: f.ComponentTransform = new f.ComponentTransform();
        nodeCube.addComponent(cmpTransform);

        //Ground
        const groundMesh: f.Mesh = new f.MeshQuad("Ground");

        const cmpGround: f.ComponentMesh = new f.ComponentMesh(groundMesh);
        cmpGround.mtxPivot.rotateX(-90, true);
        cmpGround.mtxPivot.scaleY(50);
        cmpGround.mtxPivot.scaleX(50);
        nodeGround.addComponent(cmpGround);

        const groundMaterial: f.Material = new f.Material("Ground Material", f.ShaderLitTextured);
        const cmpGroundMaterial: f.ComponentMaterial = new f.ComponentMaterial(groundMaterial);
        nodeGround.addComponent(cmpGroundMaterial);
        nodeGround.addChild(nodeCube);


        camera.mtxPivot.translateZ(15);
        camera.mtxPivot.translateY(15);

        console.log(camera);

        viewport = new f.Viewport();
        viewport.initialize("Viewport", nodeGround, camera, canvas);

        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        f.Loop.start();
    }

    let yTranslation:number = 0;

    function update(): void{
        const tSpeed: number = 3 / 1; //units per seconds
        const rSpeed: number = 360 / 3; // degrees per seconds
        const jumpHeight: number = 2;
        const fallSpeed: number = 3/1;
        const frameTimeInMillieSeconds: number = f.Loop.timeFrameGame;
        const frameTimeInSeconds: number = (frameTimeInMillieSeconds/ 1000);


        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W])){
            nodeCube.mtxLocal.translateZ(tSpeed * frameTimeInSeconds);
        }
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.S])){
            nodeCube.mtxLocal.translateZ(-tSpeed * frameTimeInSeconds);
        }

        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.D])){
            nodeCube.mtxLocal.rotateY(rSpeed * frameTimeInSeconds);
        }
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.A])){
            nodeCube.mtxLocal.rotateY(-rSpeed * frameTimeInSeconds);
        }

        //fall system
        if(yTranslation > 0){
            
            nodeCube.mtxLocal.translateY(-fallSpeed * frameTimeInSeconds);
            yTranslation -= fallSpeed;
        }
        

        // //jump system
        if(f.Keyboard.isPressedOne([f.KEYBOARD_CODE.SPACE]) && yTranslation <= 0){
            nodeCube.mtxLocal.translateY(jumpHeight);
            yTranslation = jumpHeight;
        }

        const up: f.Vector3 = f.Vector3.Y();
        viewport.camera.mtxPivot.lookAt(nodeCube.mtxWorld.translation);
        f.Recycler.store(up);
        
        viewport.draw();
    }
}