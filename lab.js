// To begin, solve the following classic “Fizz Buzz” problem.
//  There are a few different ways to do this - experiment
//   with what you think is the most
//   efficient. Once you have solved the problem, 
// ask yourself if there could be another way;
//  and if so, would it be better.

// Loop through all numbers from 1 to 100
// If a number is divisible by 3, log “Fizz.”

for (let i = 1; i <=100; i++) {
    if (i%3 ===0)                   
        console.log(i);
    console.log('Fizz');


    // If a number is divisible by 5, log “Buzz.”

    if (i%5 ===0)
    console.log('Buzz');

if (i%3 && 5 ===0,i%3 && 5 ==3 );
console.log('Fizz Buzz');
// console.log('i');
if(i %3 !==0 && i %5 !== 0){ 
    console.log(i);
}
}

// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
let num = 4;
    let count = 0;
    let foundPrime = false;
    while (!foundPrime) {
        console.log(num++);
        count++;
        let isPrime = true;
        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && num > 1) {
            console.log(num + " is prime");
            foundPrime = true;
        }
    }

//  A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. 
//  You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. 
//  While each of these programs save their data in different formats to preserve style (e.g., 
//     font color or cell backgrounds), at their core, they are storing CSV data.
//part 3
let data = "ID, Name, Occupation, Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let rows = data.split("\n");

console.log(rows);
console.log(cell1, cell2, cell3, cell4);

const csvString = "ID, Name, Occupation, Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
for(const char of csvString ) {
    console.log(char);
}

let index = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
let rows1 = index.split("\n");
console.log(rows1);
