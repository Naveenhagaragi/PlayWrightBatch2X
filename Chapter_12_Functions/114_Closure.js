
function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++ },
        decrement() { count-- },
        get() { return count; }
    }
}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());


//practice

function entryexit(start = 0) {
    let count = start;
    return {
        entry() { count++ },
        exit() { count-- },
        check() { return count; }
    }
}

let visitors = entryexit(0);
visitors.entry();
visitors.entry();
visitors.entry();
console.log(visitors.check());
visitors.exit();
console.log(visitors.check());