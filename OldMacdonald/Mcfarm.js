"use strict";
var Farm;
(function (Farm) {
    const text = document.getElementById("text");
    const animals = [];
    let goobieWoobie = new Farm.Animal("GoobieWoobie", "squeak-squeak", "salad", "GoopuLoopu");
    let dog = new Farm.Animal("Dog", "bark-bark", "DogFood", "Loaf");
    let cow = new Farm.Animal("Cow", "Moo-Moo", "grass", "Steak");
    let pig = new Farm.Animal("Pig", "oink-oink", "BigMac", "SpareRib");
    let donkey = new Farm.Animal("Donkey", "Iah-Iah", "Wheat", "Kong");
    animals.push(goobieWoobie, dog, cow, pig, donkey);
    for (let i = 0; i < animals.length; i++) {
        animals[i].sing(text);
        animals[i].eat(text);
    }
})(Farm || (Farm = {}));
