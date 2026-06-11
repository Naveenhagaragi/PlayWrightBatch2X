
const user = { name1: "John", age: 30, city: "NYC" };

// Basic destructuring
//JavaScript destructuring allows you to "unpack" values from arrays 
// or properties from objects directly into distinct variables.
const { name1, age } = user;
console.log(name1);
console.log(age);

// console.log(typeof (name1));
// console.log(typeof (age));
// console.log(user);

// Rename variables
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);


// destructuring
const { age: years } = user;
console.log(years);

// Default values
const { country = "USA" } = user;
console.log(country);
console.log(user);

const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"
        }
    }
};

const { user: { address: { city: town } = address } = user } = data;
console.log(town);

//console.log(data.user.address.city);