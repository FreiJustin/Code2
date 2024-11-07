"use strict";
var Solarsystem;
(function (Solarsystem) {
    class Astrobody {
        constructor(_orbit, _size, _color, _speed, _orbitradius, _description, _position) {
            this.orbit = _orbit;
            this.size = _size;
            this.color = _color;
            this.speed = _speed;
            this.orbitradius = _orbitradius;
            this.description = _description;
            this.positionrad = 0;
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new Solarsystem.Vector(0, 0);
            }
        }
        assignChildPositions() {
            for (const element of this.orbit) {
                const addend = new Solarsystem.Vector(Math.cos(element.positionrad), Math.sin(element.positionrad));
                addend.scale(element.orbitradius);
                element.position = addend.add(this.position);
            }
        }
        moveChildren(_timespeed, _timeslice) {
            for (const element of this.orbit) {
                element.positionrad += (element.speed * _timespeed * _timeslice);
                const addend = new Solarsystem.Vector(Math.cos(element.positionrad), Math.sin(element.positionrad));
                addend.scale(element.orbitradius);
                element.position = addend.add(this.position);
            }
        }
        draw() {
            Solarsystem.crc2.beginPath();
            Solarsystem.crc2.moveTo(this.position.x, this.position.y);
            Solarsystem.crc2.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
            Solarsystem.crc2.stroke();
            Solarsystem.crc2.fillStyle = this.color;
            Solarsystem.crc2.fill();
            Solarsystem.crc2.closePath();
        }
        checkClick(_click, _element) {
            const difference = new Solarsystem.Vector(_click.x - this.position.x, _click.y - this.position.y);
            if (Math.abs(difference.x) <= this.size && Math.abs(difference.y) <= this.size) {
                _element.innerHTML = this.description;
            }
        }
    }
    Solarsystem.Astrobody = Astrobody;
})(Solarsystem || (Solarsystem = {}));
