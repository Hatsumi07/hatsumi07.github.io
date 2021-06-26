function power() {
    //creates a vairable to store the output in a string
    let output = ''
    //for loop
    for (let number = 0; number <= 31; number++) {
        let power = 2 ** number;//creates a variable power to store the powers
        output += `${power}; `; // adds the result to the empty string output
    }
    document.getElementById("output").innerHTML = output;//Returns the output
}