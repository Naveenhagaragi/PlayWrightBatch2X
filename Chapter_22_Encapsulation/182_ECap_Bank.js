class ICICI {
    #balance; // # means private in JavaScript. In TypeScript - private

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        }
        else
            console.log("NOT ALLOWED");
    }
}


let nvn = new ICICI("Naveen", 100000);
console.log(nvn.name);
console.log(nvn.getBalance());
nvn.setBalance(500000, false);
console.log(nvn.getBalance());


let vid = new ICICI("Vidya", 2000);
console.log(vid.name);
console.log(vid.getBalance());
vid.setBalance(700000, true);
console.log(vid.getBalance());
