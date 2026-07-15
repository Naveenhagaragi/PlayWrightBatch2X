function beforeSomething(method: any) {
    return function () {
        console.log("EAT");
        return method();
    };
}

function BeforeSomeSomeThing(method: any) {
    return function () {
        console.log("SLEEP");
        return method();
    };
}

class Dog {
    @beforeSomething
    @BeforeSomeSomeThing
    bark() {
        return "woof";
    }
}

let r2 = new Dog().bark();
console.log(r2);
// tsconfig needs to be there in same folder to execute this code, else below code will use tsconfig file from main folder

//Practice

// function beforeSomething(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;

//     descriptor.value = function (this: any, ...args: any[]) {
//         console.log("EAT");
//         return originalMethod.apply(this, args);
//     };
// }

// function BeforeSomeSomeThing(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;

//     descriptor.value = function (this: any, ...args: any[]) {
//         console.log("SLEEP");
//         return originalMethod.apply(this, args);
//     };
// }

// class Dog {
//     @beforeSomething
//     @BeforeSomeSomeThing
//     bark() {
//         return "woof";
//     }
// }

// let r2 = new Dog().bark();
// console.log(r2);