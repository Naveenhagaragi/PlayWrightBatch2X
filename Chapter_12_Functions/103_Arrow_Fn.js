// Arrow function (ES6)

const greet = function (name) {
    return "Hi " + name;
}

let r = greet('Ishaan');
console.log(r);

//same as above function but using arrow function
const greet1 = (name1) => "Hi " + name1;
let s = greet1('Shriyan');
console.log(s);

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>

const doubleit = n => n * 2;
console.log(doubleit(3));

const printit = name => console.log(name);
printit('Hagaragi');


function add(a, b) {
    return a + b;
}
let c = add(2, 3);
console.log(c);

//same function can be written as
const add1 = (x, y) => (x + y); //Add1 is function name, (x,y) is arguments, (x+y) is return statement
let res = add1(4, 5);
console.log(res);

console.log(add1(10, 20)); // call function within console.log


function say() {
    console.log('Say Hi');
}
say();

const say1 = () => console.log('Say1 Hi');
say1();

const say2 = () => "Say2 Hi";
let res = say2();
console.log(res);

const greet = (name) => {
    const message = "Hi " + name;
    console.log(message);
}
greet('Naveen');
