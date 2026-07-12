interface Point {
    readonly a: number;
    readonly b: number;
}

const pts: Point = { a: 5, b: 8 }

// pts.a = 10; //This is not possible bcoz, a is readonly, cannot be modified

// Readonly Array

interface Data {
    readonly items: readonly number[];
}

let data: Data = {
    items: [1, 2, 3, 4, 5]
}
// create a function for sum
function sum(x: number, y: number): number {
    return x + y;
}

// pass a & b from interface as parameters 
let add = sum(pts.a, pts.b);
console.log(add);


//print from array
console.log(data.items[0], data.items[1], data.items[2], data.items[3], data.items[4]);

for (let i = 0; i < data.items.length; i++) {
    console.log(data.items[i]);
}