function alarm() {
    //creates variables to store the date
    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
    let dayOfWeek = now.getDay();
    let sleepIndicator = "Get up!";
    //verifies if is either saturday or sunday or a holiday
    if ((dayOfWeek == 6) || (dayOfWeek == 0)) {
        sleepIndicator = "Sleep in";    
    }
    else if ((month == 0) && (dayOfMonth == 1)) {
        sleepIndicator = "Sleep in";
    }
    else if ((month == 6) && (dayOfMonth == 4)) {
        sleepIndicator = "Sleep in";
    }
    else if ((month == 11) && (dayOfMonth == 25)) {
        sleepIndicator = "Sleep in";
    }
    //output
    document.getElementById("output").innerHTML = sleepIndicator;
}