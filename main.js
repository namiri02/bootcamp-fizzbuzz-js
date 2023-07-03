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

// Main function
function fizzbuzz() {
    var upToX = readlineSync.question('Please enter the number you would like to FizzBuzz etc. up to: ');
    upToX = +upToX;

    for (let i = 1; i < upToX + 1; i++){
        var stringToPrint = '';

        if (divByNumber(3, i)){
            stringToPrint += 'Fizz';
        }

        if (divByNumber(5, i)){
            stringToPrint += 'Buzz';
        }

        if (divByNumber(7, i)){
            stringToPrint += 'Bang';
        }

        if (divByNumber(11, i)){
            stringToPrint = 'Bong';
        }

        if (divByNumber(13, i)){
            const indexB = stringToPrint.indexOf('B');
            if (indexB != -1){
                stringToPrint = stringToPrint.slice(0, indexB) + 'Fezz' + stringToPrint.slice(indexB);
            }
            else{
                stringToPrint += 'Fezz';
            }
        }

        if (divByNumber(17, i)){
            stringToPrint = reverseOrder(stringToPrint)
        }

        if (stringToPrint == ''){
            stringToPrint = i;
        }
        
        console.log(stringToPrint);
    }
}

// Call main function
fizzbuzz();
