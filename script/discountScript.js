function checkDiscount() {
    //creates variables to store the day of the week and accepts input of the subtotal amount
    let dayOfWeek = new Date().getDay();
    let subtotalAmount = parseFloat(document.getElementById("input").value);
    let salesTax = subtotalAmount * 0.06;//defines the sales tax by the subtotal amount
    let totalAmount = subtotalAmount + salesTax; 
    //verifies if the subtotal amount is greater than $50 and is either tuesday or wendsday
    if (subtotalAmount > 50 && (dayOfWeek == 2 ^ dayOfWeek == 3)) {
        totalAmount -= subtotalAmount * 0.1; 

    }
    //returns the total amount
    document.getElementById("output").innerHTML = Math.round(totalAmount * 100) / 100;
}