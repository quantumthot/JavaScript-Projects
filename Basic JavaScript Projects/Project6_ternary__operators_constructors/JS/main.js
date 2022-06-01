
function Ride_Function() {                                   //Ternary function showing given result after input of number
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {                //Setting up new and this function for key value pairs
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");      //variables or library created
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {                                     //Given result of what is asked from library
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function count_Function() {                                 //Object construction function showing number when button is clicked
    document.getElementById("Counting").innerHTML = Count();//beginning of nesting function
    function Count()
 {
     var Starting_point = 9;                       //Nested function plussing 1 to the given variable in this case
     function Plus_one() {Starting_point += 1;}
     Plus_one();
     return Starting_point;
 }
}