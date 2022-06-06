function count_To_Ten() {                    //Counts for you.
    var Digit = "";
    var X = 1;
    while (X < 10) {                        //Counts up to the set number, so will show up to 9.
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function text_Count() {                     //Function shopws length of string.
    let text = "Hello World!";
    let length = text.length;
    document.getElementById("demo").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //Setting the variables. Instruments in this case
var Content = "";
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {                                     //The ARRAY FUNCTION will display meszsage for given index
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

function constant_function() {                                                 //CONSTANT FUNCTION will display requested info from the given.
    const Musical_Instrument = {type:"piano", brand:"Luna", color:"cream"};
    Musical_Instrument.color = "cream";
    Musical_Instrument.price = "$420";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
 }

 var X = 82;                                    
 document.write(X);
 {
     var X = 33;
     document.write("<br>" + X);
 }
 document.write("<br>" + X);

function car_Function() {                               //LET FUNCTION uses let.this
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
}