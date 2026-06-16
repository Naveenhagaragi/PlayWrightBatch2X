// n=3a;
// *
// * *
// * * *

n = 5;

// space is added for row and later its trimmed
for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row.trim());
}

//same as above, but no initial space at row, no trim
console.log("-----");
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// with space after each *
console.log("-------");
for (i = 0; i < n; i++) {
    row = " ";
    for (j = 0; j < i; j++) {
        row += "* "; // this adds additional space at last *
    }
    console.log(row);
}

// with space after each * & remove iitial & last spcae
console.log("-------");
for (i = 0; i < n; i++) {
    row = " ";
    for (j = 0; j < i; j++) {
        row += "* "; // this adds additional space at last *
    }
    console.log(row.trim());
}