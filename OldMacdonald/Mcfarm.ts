namespace Farm{
    const singText:HTMLDivElement= <HTMLDivElement>document.getElementById("sing")!;
    const eatText:HTMLDivElement= <HTMLDivElement>document.getElementById("eat")!;
    const daysToSimulate:number = 4;

    const animals:Animal[]= [];
    const goobieWoobie:Animal = new Animal("GoobieWoobie", "squeak-squeak" , "salad", "GoopuLoopu");
    const dog:Animal = new Animal("Dog", "bark-bark", "DogFood", "Loaf");
    const cow:Animal = new Animal("Cow", "Moo-Moo", "grass", "Steak");
    const pig:Animal = new Animal("Pig", "oink-oink", "BigMac", "SpareRib");
    const donkey:Animal = new Animal("Donkey", "Iah-Iah", "Wheat", "Kong");

    animals.push(goobieWoobie,dog,cow,pig,donkey);
    for(let j:number = 0; j<daysToSimulate; j++){
        for(let i:number = 0; i<animals.length; i++){
            animals[i].sing(singText);
            animals[i].eat(eatText);
        }
    }
}