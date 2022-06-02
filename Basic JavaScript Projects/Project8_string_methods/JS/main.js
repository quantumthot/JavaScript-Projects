function full_Sentence() {                                      //CONCAT METHOD will add all the variable strings together
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {                                       //SLICE METHOD
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);                        //Charachers 27 through 33 will be shown when the button is pressed. 27 is the blank
    document.getElementById("Slice").innerHTML = Section;       //space before Johnny, and 33 is the letter y in Johnny
}

function toUpperCase() {                                        //UPPERCASE FUNCTION turns all letters to uppercase.
    let text = "Hello World!";
    let result = text.toUpperCase();
    document.getElementById("demo").innerHTML = result;
}

function search() {                                 //SEARCH FUNCTION is case sensitive.  Will search the number placement 
    let text = "Mr. Blue has a blue house";         //of the word that was searched for.
    let position = text.search("Blue");
    document.getElementById("demo1").innerHTML = position;
}

function string_Method() {   
    var X = 120;                       //STRING METHOD just shows given variable as a string
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {                       //PRECISION METHOD shows only so much of the variable 
    var X = 12938.3012987376112;                    //from a given number. in this case 10 digits.    
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_Method() {                           //This function will round up a number
    let num = 5.56789;
    let n = num.toFixed();                          //Whatever number you put in the parenthesis will set the number after decimal point.
    document.getElementById("demo3").innerHTML = n;
}

function value_Method() {                           //VALUE OF method returns the primitive value of a string.
let text = "Hello World!";
let result = text.valueOf();
document.getElementById("demo4").innerHTML = result;
}