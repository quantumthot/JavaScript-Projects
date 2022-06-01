function get_Date() {                                                       //Function set it up a day
    if (new Date().getMinutes() < 960) {                                   //If function saying if the amount of minutes in the day so far are less than 4PM then it will say statement below
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}