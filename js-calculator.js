function displayValue(num) {
var expression = document.getElementById('result-field');
  expression.innerHTML += num;

var valueToCheck = expression.innerHTML.indexOf(0);

if (valueToCheck === 0) {
  expression.innerHTML = expression.innerHTML.substring(1);
  }

}

function getResult() {
    document.getElementById('result-field').innerHTML = eval(document.getElementById('result-field').innerHTML);
}

function resetC() {

  document.getElementById('result-field').innerHTML = 0;
}

function deleteLast() {
  var expression = document.getElementById('result-field');
  expression.innerHTML = expression.innerHTML.slice(0, -1);
  }
