function oddsAddition() {
    //creates variables to store the user's input, the addition and the count
    let number = parseInt(document.getElementById("input").value);
    let sum = 0;
    let count = 0;
    //creates a while loop to iterate through the numbers until it reaches the user's input
    while (count <= number) {
        //verifies if the number is odd and adds it to sum
        if ((count%2) != 0) {
            sum += count;    
        }
        count++
    }
    //returns the sum
    document.getElementById("output").innerHTML = sum;
}