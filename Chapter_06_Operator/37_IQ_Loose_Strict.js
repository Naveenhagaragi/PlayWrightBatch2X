console.log(0 == "");
console.log(0 == "0");
console.log("" == "0");  //  🤯 (transitivity broken!) both strings, compared as-is


console.log(0 == false); // 0 is considered as false in boolean context, so 0 == false is true
console.log(0 === false); // 0 is a number and false is a boolean, so they are not strictly equal
console.log(null == 0); // null is converted to 0 in loose equality, so null == 0 is true
console.log(null == undefined); // null and undefined are equal in loose equality
console.log(null === undefined); // null and undefined are not equal in strict equality