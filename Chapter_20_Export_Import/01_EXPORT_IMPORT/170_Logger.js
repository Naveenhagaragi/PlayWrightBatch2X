import log, { log2 } from "../logger.js";
// default export fn can be called outside the curly braces.
// non default export fn should be called within curly braces.

let r1 = log("loginPage");
console.log(r1);

let r2 = log2("HomePage")
console.log(r2);
