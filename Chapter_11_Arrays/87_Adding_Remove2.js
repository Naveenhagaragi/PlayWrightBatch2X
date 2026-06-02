let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);
// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5

// splice(startindex, deleteCount, ...itemsToAdd)
// arr.splice(2, 1);
// console.log(arr);

arr.splice(2, 0, 99); // add
arr.splice(2, 1, 66); // replace
console.log(arr);


// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5

arr.splice(1, 2, 10, 20);
console.log(arr);


//Practice

let arr1 = [2, 4, 6, 8];
console.log(arr1);

arr1.splice(1, 1, 3, 4, 5);
console.log(arr1);

arr1.splice(0, 0, 0, 1); //starting from 0 index, delete 0 numbers and add 0,1 from beginning
console.log(arr1);
// this is same as arr1.unshift(0, 1);

arr1.splice(7, 0, 7); //at index 7, delete 0 numbers, add 7
console.log(arr1);

