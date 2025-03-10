/*This is a MULTI-LINE comment in JS 
Below is an example of a JS STATMENT
(instruction/command)
Statments end with a SEMICOLON (;)
*/
console.log("Welcome to JavaScript!!!");

//This is a single line comment
// console.log is a FUNCTION to display information
console.log("this is the console/output");

// DECLARE a VARIABLE to hold data 
//use the LET keyword to create the variable
let pokemon;

// ASSIGN a VALUE to that variable
//like packing an item into a box
pokemon= "Pikachu" ;

// Can DECLEAR + ASSIGN in one statement 
let name = "Mia" ;
// DECLARE new variable (buying a box)
let luckyNumber;
//ASSIGN a value to that variable 
// (putting the item in that box)
luckyNumber= 11; 

// DECLARE AND ASSIGN IN ONE STATEMENT
let worstNumber= 13;

// You can "PASS IN" a VARIABLE imto a FUNCTION
console.log(luckyNumber);
// catch up on variables 
let score=1;
// Can combine operators, evaluation follows PEMDAS
score=(score * 7/5) ** 2 - 10 + 5 ;
console.log(score);

// Working with strings (words/sentences/characters)
// QUOTES always goes around String LITERALS
let greeting = "hello " + "freind"; 
// The PLUS SIGN merges (CONCATENATES) strings 
console.log (greeting); 

//Combine literal strings with VARIABLES
let username="andersonmia"
greeting = "hello" + username;
console.log(greeting); 
// Can CONCATENATE inside a function 
console.log ("Goodbye," + username + "!"); 

// converting to strings 
console.log (4+5); //9 (added numbers)
console.log( "4" + 5) // 45 
console.log(4 + '5'); // 45 

// SPECIAL OPPERATORS: Incremnet/Decrement 
let counter = 0; 
counter = counter + 1; // LONG WAY
counter ++; // SHORTCUT
console.log ("Count:" + counter);
count--;
console.log ("count:"+ counter)