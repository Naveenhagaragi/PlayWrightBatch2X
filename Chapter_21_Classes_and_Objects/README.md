## Classes and Objects (JavaScript)

This document explains the basics of classes and objects in JavaScript, common patterns, and how instance vs static members work.

### Overview
- Class: a blueprint for creating objects (instances) with shared behavior.
- Object: a concrete instance created from a class.

### Basic class syntax

```js
class Person {
  constructor(name) {
    this.name = name; // instance property
  }
  greet() {
    return `Hi, I'm ${this.name}`; // instance method
  }
}

const p = new Person('Naveen');
console.log(p.greet());
```

### Constructor
- The `constructor` method runs when `new ClassName(...)` is called. Use it to initialize instance properties.

### Instance vs Static members
- Instance properties/methods are accessed on an object: `obj.method()` or `obj.prop`.
- Static properties/methods belong to the class itself: `ClassName.staticMethod()`.

Example (static):

```js
class Helper {
  static version = '1.0';
  static info() { return `Helper v${this.version}`; }
}

console.log(Helper.info()); // works
// const h = new Helper();
// h.info(); // TypeError: h.info is not a function
```

### Common pitfall: using `this` in static methods
- Inside a static method, `this` refers to the class, not an instance. Static methods cannot access instance properties via `this`.

Bad example (will cause errors if called on an instance):

```js
class Person {
  static nationality = 'India';
  constructor(name) { this.name = name; }
  static common_fn() { return this.name + ' is from ' + this.nationality; }
}

const p = new Person('Naveen');
// p.common_fn(); // TypeError: p.common_fn is not a function
// Person.common_fn(); // returns "undefined is from India" because this.name on the class is undefined
```

### Fixes and recommended patterns

1) Make the method an instance method if it needs instance data:

```js
class Person {
  static nationality = 'India';
  constructor(name) { this.name = name; }
  common_fn() { return this.name + ' is from ' + this.constructor.nationality; }
}

const p = new Person('Naveen');
console.log(p.common_fn()); // "Naveen is from India"
```

2) Keep it static and pass the instance explicitly:

```js
class Person {
  static nationality = 'India';
  constructor(name) { this.name = name; }
  static common_fn(person) { return person.name + ' is from ' + this.nationality; }
}

const p = new Person('Naveen');
console.log(Person.common_fn(p)); // "Naveen is from India"
```

### Private fields (ES2022+)
- Use `#` to declare private instance fields. They are not accessible outside the class.

```js
class Secret {
  #secret;
  constructor(val) { this.#secret = val; }
  reveal() { return this.#secret; }
}

const s = new Secret(42);
console.log(s.reveal());
// console.log(s.#secret); // SyntaxError
```

### Inheritance
- Use `extends` to create subclasses and `super()` to call the parent constructor.

```js
class Animal { constructor(name) { this.name = name; } }
class Dog extends Animal { bark() { return this.name + ' says woof'; } }

const d = new Dog('Rex');
console.log(d.bark());
```

### Notes
- Choose instance methods when behavior depends on instance data.
- Use static methods for utility functions or data shared by the class.
- Remember `this` context differs between static and instance methods.

---

This README lives in the Chapter_21_Classes_and_Objects folder and provides quick examples you can run with Node.js.
