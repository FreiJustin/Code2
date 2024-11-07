"use strict";
var Solarsystem;
(function (Solarsystem) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
            return new Vector(this.x, this.y);
        }
        copy() {
            const copiedVector = new Vector(this.x, this.y);
            return copiedVector;
        }
    }
    Solarsystem.Vector = Vector;
})(Solarsystem || (Solarsystem = {}));
