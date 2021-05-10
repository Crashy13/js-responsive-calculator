const $numbers = document.querySelectorAll('.number');
const $operators = document.querySelectorAll('.operator', '.clear');
const $equals = document.querySelector('.equal-sign')
const $calculatorScreen = document.querySelector('.calculator-screen')
var $calculation = []

$numbers.forEach(function(pushNumber) {
  pushNumber.addEventListener('click', function(){
    alert(this.value);
    $calculation.push(this.value)
    console.log($calculation)
  })
});

$operators.forEach(function(pushOperator) {
  pushOperator.addEventListener('click', function() {
    alert(this.value);
    $calculation.push(this.value)
    console.log($calculation)
  })
});

$equals.addEventListener('click', function(calculate) {
  alert(this.value);
  let operator = '0'

      if(operator == '+') {
        result = parseFloat(n1) + parseFloat(n2);
      } else if (operator == '-') {
        result = parseFloat(n1) - parseFloat(n2);
      } else if (operator == '*') {
        result = parseFloat(n1) * parseFloat(n2);
      } else if (operator == '/') {
        result = parseFloat(n1) / parseFloat(n2);
      }
        alert($calculation)
})

// for(i = 0; i < $calculation.length, i++)
//     // let result;
//     //
//     // switch($equals) {
//     //   case '+':
//     //     result = number1 + number2
//     //     $calculation.push(this.value)
//     //     console.log(`${number1} + ${number2} = ${result}`);
//     //     break;
//     //   case '-':
//     //     result = number1 - number2
//     //     console.log(`number1 + number2 = result`)
//     //     break;
//     //   case '*':
//     //     result = number1 * number2
//     //     console.log(`number1 * number2 = result`)
//     //     break;
//     //   case '/':
//     //     result = number1 / number2
//     //     console.log(`number1 / number2 = result`)
//     //     break;
//     // }
//
//       }
//     }
//   });
//
// for(i = 0; i < $calculation.length, i++)
// let operator = '0'
//
//     if(operator === '+') {
//       result = n1 + n2;
//     } else if (operator === '-') {
//       result = n1 - n2;
//     } else if (operator === '*') {
//       result = n1 * n2;
//     } else if (operator === '/') {
//       result = n1 / n2;
//     }
//       alert($calculation)
