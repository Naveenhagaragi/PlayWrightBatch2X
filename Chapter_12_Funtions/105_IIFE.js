/* An IIFE (Immediately Invoked Function Expression) 
is a JavaScript function design pattern that runs automatically 
as soon as it is defined. 
It requires no separate invocation call and 
is primarily used to isolate variable scope. 
*/

(function () {
    console.log("Hi");
})();


(function () {
    // playwright to run the test
})();

(function () {
    console.log("Staging")
})();


(() => {
    console.log("Setup complete");
})();


// Practice

(function () {
    //your code lives safely here
    console.log('i run immediately');
})();

//Arrow IIFE

(() => {
    console.log('ARROW IIFE');
})();