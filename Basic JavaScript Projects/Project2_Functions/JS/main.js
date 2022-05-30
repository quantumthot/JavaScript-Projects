function myFunction1() {                                                               
    document.getElementById("demo1").innerHTML = "Hello, you just pushed the button!";//What shows after pushing the button
    }
function myFunction() {
    var sentence = "I am learning";                                 //Concatenated sentences
    sentence += " a lot from this book!";                           //<---------------------
    document.getElementById("Concatenate").innerHTML = sentence;    //Sentence that shows after pushing "click me"
}

function myFunction2() {
document.getElementById("demo").style.color = "red";
}

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}