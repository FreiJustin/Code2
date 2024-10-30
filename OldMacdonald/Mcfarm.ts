namespace Farm{
    const text:HTMLElement= document.getElementById("text")!;
    const animals:Animal[]= [];
    let goobieWoobie:Animal = new Animal("GoobieWoobie", "squeak-squeak" , "salad", "GoopuLoopu");
    let dog:Animal = new Animal("Dog", "bark-bark", "DogFood", "Loaf");
    let cow:Animal = new Animal("Cow", "Moo-Moo", "grass", "Steak");
    let pig:Animal = new Animal("Pig", "oink-oink", "BigMac", "SpareRib");
    let donkey:Animal = new Animal("Donkey", "Iah-Iah", "Wheat", "Kong");

    animals.push(goobieWoobie,dog,cow,pig,donkey);

    for(let i:number = 0; i<animals.length; i++){
        animals[i].sing(text);
        animals[i].eat(text);
    }
}