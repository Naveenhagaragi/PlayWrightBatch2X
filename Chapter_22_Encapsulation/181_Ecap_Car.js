class Car {
    #engine;
    constructor(name, engineName) {
        this.name = name;
        this.#engine = engineName;
    }

    getEngine() {
        return this.#engine;
    }
    setEngine(nameEngine) {
        this.#engine = nameEngine;
    }
}

let tesla = new Car("Tesla", "V8");
console.log(tesla.getEngine());
tesla.setEngine("V9");
console.log(tesla.getEngine());
console.log("------------------");

let tata = new Car("Nexon", "1.2 petrol");

console.log(tata.name + " " + tata.getEngine());
tata.setEngine("1.2 Turbo Petrol");
console.log(tata.name + " " + tata.getEngine());
