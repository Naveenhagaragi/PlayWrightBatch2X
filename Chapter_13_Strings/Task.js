let str = "madam";
let revstr = '';
for (let i = str.length - 1; i >= 0; i--) {
    revstr += str[i];
}
console.log(`Reversed String is ${revstr}`);
if (str === revstr) {
    console.log(`${str} is a Palindrone`);
}
else console.log(`${str} is not a Palindrone`);


// reverse string using built in methds
const str1 = "liril";
const revstr1 = str1.split('').reverse().join('');
console.log(`Reversed String is ${revstr1}`);
if (str1 === revstr1) {
    console.log(`${str1} is a Palindrone`);
}
else console.log(`${str1} is not a Palindrone`);

// split(''): Splits the string into an array of individual character strings.
// reverse(): Reverses the order of the newly created array in place.
// join(''): Combines the array elements back into a single string.

//Anagram - An anagram is a word or phrase formed by rearranging
// the letters of a different word or phrase, typically
// using all the original letters exactly once.

