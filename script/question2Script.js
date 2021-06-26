function logicChart() {
    //input
  let number1 = parseInt(document.getElementById("one").value);
  let number2 = parseInt(document.getElementById("two").value);
  let sum = number1 + number2;
  let result = '';
  let output = '';
  //processing
  if ((number1 > 5 && number2 > 5) || (sum > 20)) {
      result = 'True';
      output = number1 + " " + number2 + " " + result;
  }
  else {
      result = 'False';
      output = number1 + " " + number2 + " " + result;
  }
  //output
  document.getElementById("output").innerHTML = output;
  
}