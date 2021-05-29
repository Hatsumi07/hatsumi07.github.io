function calculation() {
    //Asks for numbers and the operator
    let firstNumber = parseFloat(document.getElementById("input1").value);
    let operator = document.getElementById("operator").value;
    let secondNumber = parseFloat(document.getElementById("input2").value);
    let answer = parseFloat(document.getElementById("answer").value);
    let message = "Incorrect 😢";
    let answerKey = 0
    switch (operator) { //verifies if the operator is +, -, *, /
        case "+":
            answerKey = firstNumber + secondNumber;  
            break;  
        case "-":
            answerKey = firstNumber - secondNumber;  
            break;  
        case "*":
            answerKey = firstNumber * secondNumber;
            break;  
        case "/":
            answerKey = firstNumber / secondNumber;
            break;  
        default:
            message = "You must enter a valid operator";

            }
    if (answer == answerKey) {
        message = "Correct! 🏆";
    
    }    
    //returns the correct message
    document.getElementById("output").innerHTML = message;
}  