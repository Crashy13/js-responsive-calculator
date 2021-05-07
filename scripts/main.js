const $numbers = document.querySelectorAll('.number');
const $operators = document.querySelectorAll('.operator', '.clear');
const $equals = document.querySelector('.equal-sign')
var $calculation = []

$numbers.forEach(function(pushNumber) {
  pushNumber.addEventListener('click', function(){
    alert(this.innerHTML);
    $calculation.push(this.value)
    console.log(calculation)
  })
});

$operators.forEach(function(pushOperator) {
  pushOperator.addEventListener('click', function() {
    alert(this.innerHTML);
    $calculation.push(this.value)
    console.log(calculation)
  })
});

$equals.addEventListener('click', function(calculate) {
  alert(this.innerHTML);
    // for()
});

// event.target.textContext
