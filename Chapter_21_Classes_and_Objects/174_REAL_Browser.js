class TestCase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display() { // Method
        console.log(this.name + " → " + this.status + " → " + this.priority);
    }
}

// function
function f1() {

}

const Login = new TestCase("LoginTC", "Pass", "P0");
const Signup = new TestCase("SignupTC", "Fail", "P1");

Login.display();
Signup.display();

// Function vs Method
// method is a function but inside the class :)
// method do not use a keyword function