// Primitive vs Reference Types
//Primitive types
let a = 10;
let b = a;
console.log(`a = ${a}`); //using template literals
console.log(`b =`, b); //using concatenation
b = 99;
console.log(a);

//here a & b are seperate variables holding seperate values in it

//Reference types
// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function
let obj1 = { val: 10 };
obj2 = obj1;

console.log(obj1.val);
console.log(obj2.val);
obj2.val = 99;
console.log(obj2.val);

// obj1 & obj2 are pointing to the same object, hence if the value is changed by one reference, other will also display the changed value, since it is only referencing same obect.