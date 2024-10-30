"use strict";
var Farm;
(function (Farm) {
    const singText = document.getElementById("sing");
    const eatText = document.getElementById("eat");
    const animals = [];
    const goobieWoobie = new Farm.Animal("GoobieWoobie", "squeak-squeak", "salad", "GoopuLoopu");
    const dog = new Farm.Animal("Dog", "bark-bark", "DogFood", "Loaf");
    const cow = new Farm.Animal("Cow", "Moo-Moo", "grass", "Steak");
    const pig = new Farm.Animal("Pig", "oink-oink", "BigMac", "SpareRib");
    const donkey = new Farm.Animal("Donkey", "Iah-Iah", "Wheat", "Kong");
    animals.push(goobieWoobie, dog, cow, pig, donkey);
    for (let i = 0; i < animals.length; i++) {
        animals[i].sing(singText);
        animals[i].eat(eatText);
    }
})(Farm || (Farm = {}));
