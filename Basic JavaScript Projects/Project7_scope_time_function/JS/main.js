                                    //Global variables, variable declared outside of functions.
var X = 10;                         //Given variable
function Add_numbrs_1() {          //function how to add numbers with variable
    document.write(20 + X + "<br>");//writing out the formula, equals 30
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");        //2nd function different formula
}                                   //will equal 110
Add_numbers_1();                    //Displying Add_numbers_1
Add_numbers_2();                    //Displying Add_numbers_2

                                    //Local variables, variable declared inside of functions
function Add_numbers_3() {          //Same as above except variable is inside the function
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_4() {
    document.write(X + 100);
}

Add_numbers_3();                    //Printing out numbers
Add_numbers_4();                    //Printing out numbers




function Age_Function() {                       //Age function will have if else statement
    Age = document.getElementById("Age").value; 
    if (Age >= 90) {                            //If age is over 90 the reply will be you are old enough to retire
        Retire = "You are old enough to retire!";
    }
    else {                                      //Else the message will say You are not old enough to retire
        Retire = "You are not old enough to retire!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Retire;
}


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

console.log(2+2)