function Time_Function() {                  //Time function to tell wehat time of day it is
    var Time = new Date().getHours()        //variable is hours in a day
    var Reply;
    if (Time < 12 == Time> 0) {             //If it's before noon the message will say its morning
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {     //If its between noon and 6pm it will say its afternoon
        Reply = "It is afternoon.";
    }
    else {                                  //If its after 6pm it willl say its evening timme
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;//Inner message after clicking button
}