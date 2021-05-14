const $numberButtons = document.querySelectorAll('.number');
const $operatorButtons = document.querySelectorAll('.operator')
const $equalButton = document.querySelector('.equal-sign')
const $calculation = [];

function pushNumber(event) {
  alert(event.target.value);
  $calculation.push(event.target.value);
}

function pushOperator(event) {
  alert(event.target.value);
  $calculation.push(event.target.value);
}

function calculate(event) {
  alert(event.target.value);

  let num1 = '', num2 = '', operator = null
  let operators = ['*', '-', '+', '/']

  for(let i = 0; i < $calculation.length; i++) { // loops over calculation array
    const char = $calculation[i];

    if(operators.includes(char)) { // if character is found in the operators array is true, sets operator
      operator = char;
    } else if (!operator) { // if no operator, flips to true and adds first number to num1
      num1 += char;
    } else { // if not on operator or num1, adds number to num2
      num2 += char;
    }
  }

  num1 = parseFloat(num1); // converts strings to numbers
  num2 = parseFloat(num2);

  if(operator === '+') { // causes the operator to do it's job
    return num1 + num2;
  } else if(operator === '-') {
    return num1 - num2;
  } else if(operator === '*') {
    return num1 * num2;
  } else if(operator === '/') {
    return num1 / num2;
  }
}


$numberButtons.forEach(function(button) {
  button.addEventListener('click', pushNumber);
});

$operatorButtons.forEach(function(button) {
  button.addEventListener('click', pushOperator);
});

$equalButton.addEventListener('click', calculate);












// const $numbers = document.querySelectorAll('.number');
// const $operators = document.querySelectorAll('.operator', '.clear');
// const $equals = document.querySelector('.equal-sign')
// const $calculatorScreen = document.querySelector('.calculator-screen')
// var $calculation = []
//
//
//
// $numbers.forEach(function(pushNumber) {
//   pushNumber.addEventListener('click', function(){
//     alert(this.value);
//     $calculation.push(this.value)
//     console.log($calculation)
//   })
// });
//
// $operators.forEach(function(pushOperator) {
//   pushOperator.addEventListener('click', function() {
//     alert(this.value);
//     $calculation.push(this.value)
//     console.log($calculation)
//   })
// });
//
// $equals.addEventListener('click', function(calculate) {
//   let num1 = '', num2 = '', operator;
//   for(i = 0; i < $calculation.length; i++) {
//     if('-', '+', '*', '/') {
//       operator
//     } else if(operator === undefined) {
//       num1
//     } else {
//       num2
//     }
//
//    }
//    alert($calculation)
//  })
