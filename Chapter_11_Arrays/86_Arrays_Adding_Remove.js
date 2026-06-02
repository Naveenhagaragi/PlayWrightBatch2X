let arr = [1, 2, 3];
console.log(arr);

// Add to END
arr.push(4);
console.log(arr);

// Remove from END
arr.pop();
console.log(arr);

arr.push(5, 6);
console.log(arr);

// Add to BEGINNING
arr.unshift(0);
console.log(arr);


// Remove from BEGINNING
arr.shift();
console.log(arr);


console.log(arr);
arr.unshift(100);
console.log(arr);
arr.shift();
console.log(arr);


//Practice
let arr1 = [2, 4, 6, 8];
console.log(arr1)

//Add to END
arr1.push(20, 40); //push adds value at teh end
console.log(arr1);

//Remove from End - 1 value
arr1.pop(20) // pop removes 1 value from end, //eventhough you give index inside pop, it will delete 1 value from last
console.log(arr1);

//Add from BEGINNING
arr1.unshift(1); //unshift adds from beginning
console.log(arr1);

//Remove 1 value from BEGINNING
arr1.shift(8); //within paranthesis dosnt matter, 
console.log(arr1);
