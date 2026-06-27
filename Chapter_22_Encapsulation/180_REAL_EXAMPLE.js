class Person {
    // Hide your childs
    #child1;
    #child2;

    constructor(name, kid1, kid2) {
        this.name = name;
        this.#child1 = kid1;
        this.#child2 = kid2;
    }

    getchild1() {
        return this.#child1;
    }

    setchild1(name_changed) {
        this.#child1 = name_changed;
    }

    getchild2() {
        return this.#child2;
    }

    setchild2(name_changed) {
        this.#child2 = name_changed;
    }

}

let p = new Person("Naveen", "ishu", "Shriyu");
console.log(p.name);
console.log(p.getchild1());
p.setchild1('Ishaan');
console.log(p.getchild1());
console.log(p.getchild2());
p.setchild2('Shriyan');
console.log(p.getchild2());