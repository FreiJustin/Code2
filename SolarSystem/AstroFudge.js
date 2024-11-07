"use strict";
var Solarsystem;
(function (Solarsystem) {
    var f = FudgeCore;
    class AstroFudge {
        constructor(_name, _size, _color, _speed, _orbitradius, _positionrad, _position, _rotationSpeed) {
            this.planetName = _name;
            this.size = _size;
            this.color = _color;
            this.speed = _speed;
            this.orbitradius = _orbitradius;
            this.positionrad = 0;
            this.position = _position;
            this.rotationSpeed = _rotationSpeed;
        }
        createNode() {
            const planetNode = new f.Node(this.planetName);
            const mesh = new f.MeshSphere(this.planetName + "Mesh");
            const cmpMesh = new f.ComponentMesh(mesh);
            cmpMesh.mtxPivot.scaleX(this.size);
            cmpMesh.mtxPivot.scaleY(this.size);
            cmpMesh.mtxPivot.scaleZ(this.size);
            planetNode.addComponent(cmpMesh);
            const material = new f.Material(this.planetName + "Material", f.ShaderLit);
            const cmpMaterial = new f.ComponentMaterial(material);
            cmpMaterial.clrPrimary.set(this.color[0], this.color[1], this.color[2], this.color[3]);
            planetNode.addComponent(cmpMaterial);
            const cpmTransform = new f.ComponentTransform();
            planetNode.addComponent(cpmTransform);
            return planetNode;
        }
    }
    Solarsystem.AstroFudge = AstroFudge;
})(Solarsystem || (Solarsystem = {}));
