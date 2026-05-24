// number == string
console.log(42 == "42"); // == -> loose compasion
console.log(42 === "42"); //data type and converted value
console.log(42 == "45"); //value different


console.log(5 === 5);
console.log(5 === "5");

console.log(5 == 5);
console.log(5 == "5");

console.log(0 == ""); // ?  "" = conveted to 0 - checked by the loose
console.log(0 === "");
console.log(typeof ""); // string

console.log(true == 1);
console.log(false == 0);
console.log(true == "1");
console.log(true == 2);
console.log(false == 2); // false is 0, value campared is 2, 0 == 2 -> false

console.log(true === 1);

console.log(5 != "5"); // false , 5 = int, "5" string, both of them are not equal? - lose couple
console.log(5 !== "5"); // true ( value, dataType)
//console.log(5 !=== "5"); //This doesn't exist, it will throw an error


// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.