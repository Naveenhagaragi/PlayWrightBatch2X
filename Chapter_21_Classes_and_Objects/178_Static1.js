class Person {

    static nationality = "India";
    constructor(name) {
        this.name = name;
    }
    common_fn() {
        return (this.name + " is from " + Person.nationality);
    }
}

let nvn = new Person("Naveen");
console.log(nvn.name);

console.log(nvn.common_fn());  // Static properties/methods belong to the class, not to instances.

/* 
If you want to print "Naveen is from India",
    then make common_fn() as non static(remove static),
        and change 'this.nationaity' to 'Person.nationality'
        coz nationality attribute is static, can be called by class name.
        or change 'this.nationality' to 'this.constructor.nationality'
*/

