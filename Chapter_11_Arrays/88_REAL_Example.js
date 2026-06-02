let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);

let removed = browser.shift();
console.log(browser);
console.log(removed);


for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera is removed from the selenium!");
    }
}

//practice
let bikes = new Array('Apache', 'pulsar', 'KTM', 'shine', 'xtreme', 'bullet');
console.log(bikes);

//if array has KTM, remove it

for (let j = 0; j < bikes.length; j++) {
    if (bikes[j] === 'KTM') {
        let bikeremoved = bikes.splice(j, 1);
        console.log(bikeremoved, 'is removed from array');
    }
    console.log(bikes[j]);
}
console.log(bikes);