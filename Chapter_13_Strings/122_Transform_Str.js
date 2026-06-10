let str = "   Hello World..!!   ";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

let msg = "Test: Fail, Retry: Fail";
console.log(msg.replace('Fail', 'Pass'));
console.log(msg.replaceAll('Fail', 'Pass'));
console.log(msg.replace(/Fail/g, "PASS"));

/*
/FAIL/g: The regular expression defining what to find. 
The /g is a global flag, ensuring it replaces every 
occurrence in the string, rather than just the first one.
*/