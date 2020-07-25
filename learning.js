var number = 5; //In line Comments in JS

/* This is a 
multiline 
comment*/

/* Data Types:
undefined, null, boolean, string, symbol, number, object
 */

 //Variable can be declared as var, let and const
 //var will be used throughout the program while let is used in the scope of declaration only
 //const is a variable that never changes
 var myName = "Beau"
 console.log(myName);
 myName = 8
 console.log(myName);

 let ourName = "FreeCodecamp"

 const pi = 3.14

 // Declaring and assigning variables
 var a;  //declare a variable; uninitialized variables
 var b = 2; //declaring and assigning a variable; initialized variables
 console.log(a);

 a = 7;
 b = a;
 console.log(a)

 //variable name and function names in JS are case sensitive



 //Using bracket notations
 var firstName = "Ada";
 var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
 console.log(thirdToLastLetterOfFirstName)
 var len = firstName.length
 console.log(len)

 //Increment and decrement number

 var myVar = 87;
 myVar = myVar + 1;
 //shortcut
 myVar++
 console.log(myVar)
 //Similarly decrement
 myVar--
 console.log(myVar)

 //------Float Number----------
 var myDecimal = 56.88;
 var yourDecimal = 0.0005;
 console.log(myDecimal)
 console.log(yourDecimal)

 //multiply decimals
 var product = 2.0 * 2.5;
 console.log(product)

 //divide decimal
 var quotient = 4.4/2.0;
 console.log(quotient)

//Finding remainder
 var remainder = 4.5%2.0
 console.log(remainder)

 //compound assignment with augmented addition, multiplication, division and substarction
 var a = 3;
 var b = 17;
 var c = 12;
 var d = 15;
 var e = 20;

 a += 12;
 b += 7;
 c -= 6;
 d *= 2;
 e /= 4;
 console.log("The value of a is: " + a)
 console.log("The value of b is: " + b)
 console.log("The value of c is: " + c)
 console.log("The value of d is: " + d)
 console.log("The value of e is: " + e)

 //Declare string variables
 var myFirstName = "Sanjiv"
 var myLastName = " Mathur"
 console.log("My full name is " + myFirstName + myLastName)

 // Escaping literal quotes in string - escape character \
var myStr = " I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr)

 //Quoting strings with single quotes - using single quotes to define a string allows to use double quotes inside a string
 //using back tick `` i can use both single and double quotes in a string
var myStr = '<a href="http://www.example.com" target="_blank">Link </a>';
console.log(myStr)
var anyStr = `This is a single quote ' and a double quote " in a string`;
console.log(anyStr)

 // Escape sequences in Strings
/*****
 Code Output
 \' single quote
 \" double quote
 \\ backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed
 *****/
 var escStr = "First line\n\t\\second line have a double quote escaped \"\nthird line have a single quote escaped \' "
 console.log(escStr)

 //String concatenation - using + and += operator
var myStr = "This is the start. " + "This is the end."
console.log(myStr);
var yourStr = "My name is ";
yourStr += "Sanjiv Mathur"
console.log(yourStr)

 // String cancatenation using variables and +=
 var someAdj = "worthwhile";
 var myStr = "Learning to code is ";
 console.log(myStr += someAdj)

 // Finding string length - .length
 var myName = "Sanjiv Mathur"
 var nameArray = myName.split(" ")
 var nameLength = myName.split(" ").join('').length
 console.log("First name is " + nameArray[0] +" and last name is " + nameArray[1])
 console.log("My full name is " + nameLength + " charatcters long.")

// Getting letters from a string with index (0 based) using bracket [] notation
 var firstLetterOfFirstName = "";
 var firstName = "Sanjiv";

 firstLetterOfFirstName = firstName[0];
 var secondLetterOfFirstName = firstName[1];
 console.log(firstLetterOfFirstName)
 console.log(secondLetterOfFirstName)

// String Immutability
var myStr = "Jello World";
console.log(myStr.replace(myStr[0], "H"))

//Bracket notation to find nth character in a string
var newStr = "This is a new character";
console.log(newStr[(newStr.length)-1])

//madlib word game
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + "." ; 
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "black", "flew", "hastely"));

//Storing multiple vlaues in an array and retriving 
var myArray = ["Sanjiv", 42, "Working"];
console.log(myArray)
console.log(myArray[1])  // Retriving second element

//Nested array or multidimensional array

var nestedArray = [42, ["Sanjiv", "Mathur", "25-05-1978"], [15, "Kronos", "Yatra"], 6.3, "Manan", 244, "Wilson Drive"];
var fullName = nestedArray[1][0] + " " + nestedArray[1][1];
var kidsAge = nestedArray[3];
var kidsFullName = nestedArray[4] + " " + nestedArray[1][1]
console.log(fullName)
console.log("My kid name is " + kidsFullName + " and he is " + kidsAge + " years old.")

//Adding elements to an array using push() function, will append at the end
var myArray = ["San", "man"];
myArray.push("manan")
console.log(myArray)
var ourArray = ["Usha", "Sanjiv"];
ourArray.push([39, 42])
console.log(ourArray)

// manipuling array with pop() function - removing an array, the last element from an array
var ourArray = [1, 2, 3, 4];
var removedFromOurArray = ourArray.pop();
console.log(removedFromOurArray)
console.log(ourArray)

//Manipulating array with shift() function - similar to pop but it removes the first element of an array unlike the pop() that removes the last element
var ourArray = ["Sanjiv", "San", ["Cat", 1], "Hello"]
var shiftRemove = ourArray.shift();
console.log(shiftRemove)
console.log(ourArray)

//manupulating array with unshift() function - similar to push() function, only the difference it unshift() add an element at the start of an array unlike push(), that ends at the end
var myArray = ["Manan", "Mathur", ["Age", 6.3], ["Address", "244 Wilson Drive"], ["City", "Milton"]] ;
console.log(myArray)
myArray.unshift(["Father", "Sanjiv Mathur"]);
console.log(myArray)

//Functions allows us to make our code reusable
function ourReusableFunction() {
    console.log("Hello World, I am inside a function");
}
ourReusableFunction();