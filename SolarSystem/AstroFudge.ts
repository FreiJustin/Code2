namespace Solarsystem{
    import f = FudgeCore;
    export class AstroFudge{
        planetName: string;
        size: number;
        color: number[];
        speed: number; //in radians, earth:6Math.PI/180
        orbitradius: number;
        positionrad: number; //in radians
        position: f.Vector3;
        rotationSpeed: number;

        constructor(_name:string, _size:number, _color:number[], _speed: number, _orbitradius:number, _positionrad:number, _position: f.Vector3, _rotationSpeed:number){
            this.planetName = _name;
            this.size = _size;
            this.color = _color;
            this.speed = _speed;
            this.orbitradius = _orbitradius;
            this.positionrad = 0;
            this.position = _position;
            this.rotationSpeed = _rotationSpeed;
        }

        createNode(): f.Node {
            const planetNode:f.Node = new f.Node(this.planetName); 

            const mesh:f.Mesh = new f.MeshSphere(this.planetName+"Mesh");
            const cmpMesh:f.ComponentMesh = new f.ComponentMesh(mesh);
            cmpMesh.mtxPivot.scaleX(this.size);
            cmpMesh.mtxPivot.scaleY(this.size);
            cmpMesh.mtxPivot.scaleZ(this.size);
            planetNode.addComponent(cmpMesh);

            const material:f.Material = new f.Material(this.planetName+"Material", f.ShaderLit);
            const cmpMaterial:f.ComponentMaterial = new f.ComponentMaterial(material);
            cmpMaterial.clrPrimary.set(this.color[0],this.color[1],this.color[2],this.color[3]);
            planetNode.addComponent(cmpMaterial);

            const cpmTransform:f.ComponentTransform = new f.ComponentTransform();
            planetNode.addComponent(cpmTransform)
            return planetNode;
        }






    }
}