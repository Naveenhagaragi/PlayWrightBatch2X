console.log("Hello");

function add (a,b){
    return a+b;
}
let result=0;
for (let i=0; i<10000; i++){
    result = add(result, i);
    
}

console.log("After 10000 calls: " + result);