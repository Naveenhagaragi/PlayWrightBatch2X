// Pre Increment -> ++a -> increase the value and then assign the value. 
let a = 10;
let b = ++a; // (increment the a by 1)

console.log(b);
console.log(a);

// Post Increment -> a++ -> assign the value and then increase the value.
let a = 10;
let b = a++;

console.log(b); // 10 
console.log(a);  // 11

// Pre Deincrement -> --a -> decrease the value and then assign.
let a = 10;
let b = --a; // (decrement the a by 1 and assign to b)
console.log(b); // 9
console.log(a);  // 9

// Post Deincrement -> a-- -> assign the value and then decrease the value. 
let a = 10;
let b = a--; // (assign a to b and then decrement a by 1) 
console.log(b); // 10
console.log(a);  // 9