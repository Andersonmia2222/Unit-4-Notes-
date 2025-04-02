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
counter--;
console.log ("count:"+ counter)

/* FUNCTIONS;
Reusable sets of code statments that perform a specific task or process
*/
 //Example of CALLING (using) a function 
 console.log ("hellooo");
 //Example of DECLARING (creating) a fuction
 function skincare() {
    // 3 statments (steps/instructions)
    console.log("1. Double cleanse");
    console.log("2. Toner");
    console.log(" 3.Moisturize ");
 }
 // To CALL (run) our function, say its name 
 skincare();
 skincare(); //repeat the routine again!

 //Functions are like Recipes;
 // - PARAMETERS ARE LIKE ingredients
 // - RETURN values are like a completed meal 

 // Example below is a recipe for creating a sandwich
 //Need some fillling, bread and sauce to do it!
 function makeSandwich (filling, bread, sauce) {

   let sandwich = filling + " sandwich on " + bread +  " with " + sauce;
   return sandwich; // OUTPUT!!! 

 }
 // Use the general recipe with ingredients
 // Store the resulting sandwich in variable 
 let grilledCheese = makeSandwich("cheese", "toast", "butter");
 console.log(grilledCheese); 
 
let caprese = makeSandwich("tomato mozz", "ciabatta", " pesto");
console.log (caprese); 

//*** Selection (CONDITIONALS)****
// A conditional expression is like a QUESTION 
//where a boolean (true/false) is the ANSWER
//Conditions that include COMPARISON OPERATORS
// get EVALUATED and result in true/false 
console.log( 2 > 1 ); //true 
console.log(2 > 1 ); //true
console.log(2==1); //== means are they equal 
console.log(2 != 1 ); /// need to be right next to eachother,means not equl 
console.log(2<1)
 // ASSIGN a comparison result to a variable 
 let result= (5>4); 
 console.log(result); 
 // Comparing STRING (text) uses dictionary order
 //True if letter is later in order 
 console.log('Z' > 'A'); 
 console.log('Aamiyah' == 'Ethan')
 