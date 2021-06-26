function getDivisors() {
    //input
    let firstNumber = parseInt(document.getElementById("input1").value);
    let secondNumber = parseInt(document.getElementById("input2").value);
    let thirdNumber = parseInt(document.getElementById("input3").value);
    let output = '';
    //processing
    for (firstNumber; firstNumber <= secondNumber; firstNumber++) {
        if (firstNumber % thirdNumber === 0) {
            output += `${firstNumber} `;
        }
    }
    //output
    document.getElementById("output").innerHTML = output;
  }