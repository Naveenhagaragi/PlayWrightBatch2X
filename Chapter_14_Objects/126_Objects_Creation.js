let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);
//here c & d points to different objects

if (c === d) {
    console.log("true");
}
else {
    console.log("false");
}