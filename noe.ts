// Base Animal class
class Animal {
    private name: string;
    private color: string;
    private pawsNumber: number;

    constructor(name: string, color: string, pawsNumber: number) {
        this.name = name;
        this.color = color;
        this.pawsNumber = pawsNumber;
    }

    public getName(): string {
        return this.name;
    }

    public getColor(): string {
        return this.color;
    }

    public getPawsNumber(): number {
        return this.pawsNumber;
    }

    public canBePhotographed(): boolean {
        return true;
    }
}

// Derived classes
class Cat extends Animal {
    constructor(name: string, color: string) {
        super(name, color, 4);
    }

    public meow() {
        console.log("Meow");
    }
}

class Dog extends Animal {
    constructor(name: string, color: string) {
        super(name, color, 4);
    }

    public bark() {
        console.log("Bark");
    }
}

class Bird extends Animal {
    constructor(name: string, color: string) {
        super(name, color, 2);
    }

    public fly() {
        console.log("Fly");
    }
}

class Fish extends Animal {
    constructor(name: string, color: string) {
        super(name, color, 0);
    }

    public swim() {
        console.log("Swim");
    }
}

class Worm extends Animal {
    constructor(name: string, color: string) {
        super(name, color, 0);
    }
}


interface Caressable {
    caress(): void;
}

interface Feedable {
    feed(): void;
}


class CaressableAnimal extends Animal implements Caressable {
    constructor(name: string, color: string, pawsNumber: number) {
        super(name, color, pawsNumber);
    }

    public caress() {
        if (this.getPawsNumber() === 4) {
            console.log(`You caressed the ${this.getName()}`);
        } else {
            console.log(`You cannot caress the ${this.getName()} because it does not have 4 paws`);
        }
    }
}

class FeedableAnimal extends Animal implements Feedable {
    constructor(name: string, color: string) {
        super(name, color, 0);
    }

    public feed() {
        if (this.getColor() === "noir") {
            console.log(`You fed the ${this.getName()}`);
        } else {
            console.log(`You cannot feed the ${this.getName()} because it is not black`);
        }
    }
}

const europeanCat = new Cat("Chat européen", "noir");
const chartreuxCat = new Cat("Chat chartreux", "gris");
const newfoundlandDog = new Dog("Chien Terre-Neuve", "noir");
const moonMoonDog = new Dog("Chien Moon Moon", "blanc");
const sparrow = new Bird("Mésange", "multicolore");
const blackbird = new Bird("Merle", "noir");
const tuna = new Fish("Thon", "bleu");
const shark = new Fish("Requin", "gris");
const maggot = new Worm("Asticot", "blanc");


function photograph(animal: Animal) {
    if (animal.canBePhotographed()) {
        console.log(`You photographed the ${animal.getName()}`);
    }
}

function makeMeow(cat: Cat) {
    cat.meow();
}

function makeBark(dog: Dog) {
    dog.bark();
}

function makeFly(bird: Bird) {
    bird.fly();
}

function makeSwim(fish: Fish) {
    fish.swim();
}

function caressAnimal(animal: Animal & Caressable) {
    if (animal.getPawsNumber() === 4) {
        animal.caress();
    } else {
        console.log(`You cannot caress the ${animal.getName()} because it does not have 4 paws`);
    }
}

function feedAnimal(animal: Animal & Feedable) {
    if (animal.getColor() === "noir") {
        animal.feed();
    } else {
        console.log(`You cannot feed the ${animal.getName()} because it is not black`);
    }
}