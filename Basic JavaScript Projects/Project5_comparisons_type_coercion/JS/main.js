
document.write(typeof 25);//typeof will show 'number'


document.write(" People: "//This one puts together a string and number
+ 26);

document.write(10 == 10);//Will show 'true' because statement is true

document.write(3 == 11);//Will show 'false' because statement is false

X = 10;
Y = 10;
document.write(X === Y);//=== tells if it is equal in value and type
                        //will be true or false.
X = 82;
Y = "82";
document.write(X === Y);//=== tells if it is equal in value and type
                        //will be true or false. does not because a 
                        //string isn't recognized as a number

document.write(5 > 2 && 10 > 4);//Both must be true to be true or
                                //else will come up as false
                    
document.write(5 > 10 && 10 > 4);//Both must be true to be true or
                                //else will come up as false

document.write(5 > 10 || 10 > 4);//Only one must be true to show true


document.write(5 > 10 || 10 > 20);//If both are not true it will show false

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);//Button shows the not function
}