let g_x = 10;


// Nested scope | blocked scope 
function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);

    }
    inner();
    console.log(y);
}
//outer();


// inner() function call is within the outer() function.
// in order to invoke/call inner(), you need to invoke/call outer().
// unless you call outer(), inner() will not execute.