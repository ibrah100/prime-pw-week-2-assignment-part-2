// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// First, we create a variable called name and set it to the string: "Dane".
// Then, we create a "if else" conditional that checks if our variable, name, is equal to: "Mary".
// If 'name' is equal to "Mary", then we console.log: "Hi, Mary!".
// Lastly, if 'name' is equal to anything else, then we console.log: "How do you do?". 

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// First, we create a variable called secret but for now, it's set to nothing.
// Then, we create a variable called 'code' and set it to the number: 123.
// Then, we create a "if" conditional that checks if 'code' is strictly equal to: 123.
// If 'code' is strictly equal to: 123, set 'secret' to the string: "super".
// Also, set 'code' to equal 'code' mutiplied by two.
// Then we create another "if" conditional that checks if 'code' is greater than 250.
// If 'code' is greater than 250, set 'secret' to the string: "duper".
// Lastly, console.log the variable: 'secret'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// First, we create a variable called 'isStudent' and set it to true.
// We create a variable called 'age' and set it to 34
// We create a variable called 'zip' and set it to 55407.
// Next, we create a "else if" conditional that checks if 'isStudent' is strictly equal to true and if 'zip' is greater than 80000.
// If both are true, console.log the string: "You're a student on the West Coast".
// If 'isStudent' is false or if 'age' is less than 30, console.log the string: "What are your hobbies?".
// IF 'isStudent' is true, console.log the string: "Welcome to Prime!".
// In any other case that isn't stated above, console.log the string: "How about the weather?".

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX -  variables 'colorOne' and 'colorTwo' should be switched around
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - we want both the variables 'colorOne' and 'colorTwo' to be set to "purple".
// Here only 'colorOne' is being set to "purple" 
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*

// FIX - In this case, the variable 'time' is a constant so it will always be 4.
// Since the time can change, we want it to be: let time = 4.
let temp = 40;
const time = 4;

// FIX - This conditional is set with 'or' (||) operator.
// We want this conditional to be applied when BOTH conditions are true.
// So we change it to an 'and' (&&) operator.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - Here, if 'age' is greater than or equal to 'minAge', the program will console.log: 'no entry'.
// In this case, we want the two console.log's switched around so when our conditional is met, we console.log: 'enter'.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

