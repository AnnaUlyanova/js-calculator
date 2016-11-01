function displayValue(num) {
  var expression = document.getElementById('result-field');
  expression.innerHTML += num;

var str = expression.innerHTML;
var res = str.indexOf(0);
console.log(res);
if (res === 0) {
  expression.innerHTML = expression.innerHTML.substring(1);
  }

}

function getResult() {
    document.getElementById('result-field').innerHTML = eval(document.getElementById('result-field').innerHTML);
}

function resetC() {
  
  document.getElementById('result-field').innerHTML = 0;
}
