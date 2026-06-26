class Car {
    // CAB - Comstructor - Attribute - Behaviour

    //  Constructor. 
    constructor(name_given_during_obj_creation) {
        this.name = name_given_during_obj_creation;
    }
    // Attribute 
    // Behavior. 
    drive() {
        console.log("i am driving", this.name);
    }

}

const tesla = new Car("Model S");
tesla.drive();

const i10 = new Car("grand i10");
i10.drive();

const tata = new Car("Nexon");
tata.drive();