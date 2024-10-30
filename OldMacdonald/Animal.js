"use strict";
var Farm;
(function (Farm) {
    class Animal {
        constructor(_type, _sound, _food, _name) {
            this.foodamount = 100;
            this.set(_type, _sound, _food, _name);
        }
        set(_type, _sound, _food, _name) {
            this.type = _type;
            this.sound = _sound;
            this.foodtype = _food;
            this.name = _name;
        }
        eat(_element) {
            const para = document.createElement("p");
            this.foodamount -= 25;
            para.innerHTML = this.name + " ate their " + this.foodtype + " and has " + this.foodamount + "% left";
            _element.appendChild(para);
            console.log(para);
            if (this.foodamount <= 0) {
                this.refill(_element);
            }
        }
        refill(_element) {
            const para = document.createElement("p");
            para.innerHTML = "Old MacDonald refilled the food of " + this.name;
            this.foodamount = 100;
            _element.appendChild(para);
            console.log(para);
        }
        sing(_element) {
            const para = document.createElement("p");
            para.innerHTML = "Old MacDonald had a farm, E-I-E-I-O <br> And on that farm he had a " + this.type + " E-I-E-I-O <br> With a " + this.sound + " here and a " + this.sound + " there <br> " + this.sound + " here, " + this.sound + " there, " + this.sound + " everywhere <br>";
            _element.appendChild(para);
            console.log(para);
        }
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
