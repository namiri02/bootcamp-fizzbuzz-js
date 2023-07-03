// Main function

// Divides a provided number by a divisor
function divByNumber(div, num){
    return num % div == 0;
}

function fizzbuzz() {

    for (let i = 1; i < 101; i++){
        var stringToPrint = '';

        if (divByNumber(3, i)){
            stringToPrint += 'Fizz';
        }

        if (divByNumber(5, i)){
            stringToPrint += 'Buzz';
        }

        if (stringToPrint == ''){
            stringToPrint = i;
        }
        
        console.log(stringToPrint);
    }
}

// Call main function
fizzbuzz();
