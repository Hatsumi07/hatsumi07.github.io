function checkWeather() {
    //Asks for the weather
    let weather = document.getElementById("weather").value;
    let message = "";
    switch (weather) { //verifies what the weather is
        case "hot":
            message = "sandals";  
            break;  
        case "rain":
            message = "galoshes";  
            break;  
        case "snow":
            message = "boots";
            break;   
        default:
            message = "shoes";

            }   
    //returns the type of shoes for the weather
    document.getElementById("output").innerHTML = message;
}  