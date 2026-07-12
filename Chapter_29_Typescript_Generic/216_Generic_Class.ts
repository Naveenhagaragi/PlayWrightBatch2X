class TestDataStorage<T> {
    private items: T[] = [];

    add(newitem: T): void {
        this.items.push(newitem);
    }

    getFirst(): T {
        return this.items[0]!;
    }

    getAll(): T[] {
        return this.items;
    }

    getCount(): number {
        return this.items.length;
    }

    getLast(): T {
        let lastitem = this.items.length - 1;
        return this.items[lastitem]!;
    }
}

let statusCodeStore = new TestDataStorage<number>();
let TestNameStorage = new TestDataStorage<string>();

statusCodeStore.add(200);
statusCodeStore.add(400);
statusCodeStore.add(403);
statusCodeStore.add(500);

TestNameStorage.add("SignUp Test");
TestNameStorage.add("Login Test");
TestNameStorage.add("CheckOut Test");

console.log('Codes: ' + statusCodeStore.getAll());
console.log('FirstCode: ' + statusCodeStore.getFirst());
console.log('LastCode: ' + statusCodeStore.getLast());
console.log('Codescount: ' + statusCodeStore.getCount());

console.log();

console.log('AllTests: ' + TestNameStorage.getAll());
console.log('FirstTest: ' + TestNameStorage.getFirst());
console.log('LastTest: ' + TestNameStorage.getLast());
console.log('#ofTests: ' + TestNameStorage.getCount());

