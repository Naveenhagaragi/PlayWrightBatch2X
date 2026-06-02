let results = ["pass", "fail", "pass", "error", "fail"];

//// indexOf — returns first index, or -1 if not found
results.indexOf("fail"); //1
results.indexOf("skip");        // -1

// lastIndexOf — searches from the end
results.lastIndexOf("fail");    // 4


// includes — returns boolean
results.includes("error"); // true
results.includes("skip");       // false


// find — returns first matching element
let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);
console.log(r);

// findIndex
nums.findIndex(n => n > 20); // 1, 2, 3

nums.findLast(n => n > 20); // 45] 
nums.findLastIndex(n => n > 20);// 3



//Practice

let numx = [10, 20, 25, 35, 50, 20];
console.log(numx);

console.log(numx.indexOf(20)); //returns index of 20 in array from beginning
console.log(numx.indexOf(30)); //returns -1 if searched element is not in array

console.log(numx.lastIndexOf(20)); //returs index of 20 in an array from END

console.log(numx.includes(25)); //returns TRUE if element is present in array
console.log(numx.includes(32)); //returns FALSE if element is present in array

console.log(numx.find(x => x > 30)); //returns first element after condition match
console.log(numx.findLast(x => x > 30)); //returns first element from END after condition match

console.log(numx.findIndex(x => x > 30));
console.log(numx.findLastIndex(x => x > 30));

