                                    //Global variables, variable declared outside of functions.
var X = 10;                         //Given variable
function Add_numbers_1() {          //function how to add numbers with variable
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

Add_numbers_3();
Add_numbers_4();