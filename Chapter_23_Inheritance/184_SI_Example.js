class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }

    sleep() {
        console.log(this.name + " is sleeping");
    }
}

class Dog extends Animal {

    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(this.name + " is barking");
    }
}

let doggy = new Dog("Bruno", "Pug");
console.log(doggy.name);
console.log(doggy.breed);
doggy.eat();
doggy.sleep();
doggy.bark();

