function CricketODIsquad(Captain, viceCaptain, ...Players) {
    console.log('... CRICKET ODI SQUAD ...');
    console.log('-------------------------');
    console.log(`Captai: ${Captain}`);
    console.log(`Vice-Captain: ${viceCaptain}`);
    console.log(`Players: ${Players.join(', ')}`);
}

CricketODIsquad('Shubman Gill', 'Shreyas Iyer', 'Rohit Sharma', 'Virat Kohli', 'Yashasvi Jaiswal', 'Sai Sudharsan');



// SUM of n numbers
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));

/*
numbers: The array of numbers you want to add together.
.reduce(): A method that processes an array to return a single value.
(a, b) => a + b: The function that adds the current number (b) to the running total (a).
0: The starting value for the running total.
*/