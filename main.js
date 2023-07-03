const readlineSync = require('readline-sync');

// Divides a provided number by a divisor
function divByNumber(div, num){
    return num % div == 0;
}

// Reverses the order in which any fizzes, buzzes, bangs etc. are printed
function reverseOrder(str){
    const splitString = str.split(/(?=[A-Z])/);
    return splitString.reverse().join('').toString();
}

// Check if a given number is a triangle number
function isTriangleNumber(num){
   return (Number.isInteger(((Math.sqrt((8*num + 1))) - 1)/2));
}

// Main function
function fizzbuzz() {
    // Getting command line arguments
    const commandLineArgs = process.argv.splice(2, process.argv.length);
    // Converting command line arguments to integers
    const rulesImplemented = commandLineArgs.map(x => +x);

    // Getting maximum number from user
    var upToX = readlineSync.question('Please enter the number you would like to FizzBuzz etc. up to: ');
    upToX = +upToX;

    // Main for loop to do FizzBuzz...
    for (let i = 1; i < upToX + 1; i++){
        var stringToPrint = '';

        if (divByNumber(3, i) && rulesImplemented.includes(3)){
            stringToPrint += 'Fizz';
        }

        if (divByNumber(5, i) && rulesImplemented.includes(5)){
            stringToPrint += 'Buzz';
        }

        if (divByNumber(7, i) && rulesImplemented.includes(7)){
            stringToPrint += 'Bang';
        }

        if (divByNumber(11, i) && rulesImplemented.includes(11)){
            stringToPrint = 'Bong';
        }

        if (divByNumber(13, i) && rulesImplemented.includes(13)){
            const indexB = stringToPrint.indexOf('B');
            if (indexB != -1){
                stringToPrint = stringToPrint.slice(0, indexB) + 'Fezz' + stringToPrint.slice(indexB);
            }
            else{
                stringToPrint += 'Fezz';
            }
        }

        if (divByNumber(17, i) && rulesImplemented.includes(17)){
            stringToPrint = reverseOrder(stringToPrint);
        }

        // Check if triangle number
        if (isTriangleNumber(i)){
            stringToPrint = stringToPrint.toString().replaceAll(/[A-Z]/g, 'T');
        }

        if (stringToPrint == ''){
            stringToPrint = i;
        }
        
        // Print string
        console.log(stringToPrint);
    }
}

// Call main function
fizzbuzz();
