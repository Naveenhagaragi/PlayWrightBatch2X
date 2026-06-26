import { base_url as url_1, formatFirstName as FNAME, formatFirstName } from "../utils.js";
import { BASE_URL as url_2, formatUpperCaseString as UCASE, formatUpperCaseString } from "../testutils.js";

console.log(url_1);
console.log(url_2);

let result1 = formatFirstName("ValidateSignUp");
console.log(result1);

let result2 = formatUpperCaseString("test case passed");
console.log(result2);

// Alias name can be used instead of inported function names
console.log("----usingAlias----")

let res1 = FNAME("ValidateSignUp");
console.log(res1);

let res2 = UCASE("test case passed");
console.log(res2);
