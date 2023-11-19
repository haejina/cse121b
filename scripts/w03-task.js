/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2)
{
    return number1 + number2;
}

function addNumber()
{
    
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.getElementById('sum').value = add(addNumber1, addNumber2);    
}
document.querySelector('#addNumbers').addEventListener('click', addNumber);


/* Function Expression - Subtract Numbers */
function Subtract(number1, number2)
{
    return number1 - number2;
}

function SubtractNumber()
{
    const SubtractNumber1 = Number(document.querySelector('#subtract1').value);
    const SubtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.getElementById('difference').value = Subtract(SubtractNumber1, SubtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click',SubtractNumber);

/* Arrow Function - Multiply Numbers */
function multiply(number1, number2) 
{
    return number1 * number2;
}

function multiplyNumbers() 
{
    const multiplyNumber1 = Number(document.querySelector('#factor1').value);
    const multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.getElementById('product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
// Function declaration
function divide(dividend, divisor) 
{
    return dividend / divisor;
}

// Function expression
function divideNumbers()
{
    const dividendNumber = Number(document.querySelector('#dividend').value);
    const divisorNumber = Number(document.querySelector('#divisor').value);

    
    if (divisorNumber !== 0) 
    {
        document.getElementById('quotient').value = divide(dividendNumber, divisorNumber);
    } 
    else 
    {
        alert('Cannot divide by zero!');
    }
};
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
function calculateTotal() 
{
    
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const membershipChecked = document.getElementById('member').checked;

    let total;
    if (membershipChecked) 
    {
        total = subtotal - (subtotal * 0.15);
    } 
    else 
    {
        total = subtotal;
    }

    document.getElementById('total').textContent = `Total Due: $${total.toFixed(2)}`;
}

document.getElementById('getTotal').addEventListener('click', calculateTotal);



/* ARRAY METHODS - Functional Programming */
// Declare and instantiate an array variable to hold numbers 1 through 13
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
document.getElementById('array').textContent = numbersArray;
/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.getElementById('#odds').textContent = oddNumbers;
/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('#evens').textContent = evenNumbers;
/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.getElementById('#sumOfArray').textContent = sumOfArray;
/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray;
/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
