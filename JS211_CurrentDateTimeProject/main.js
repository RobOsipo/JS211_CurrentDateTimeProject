// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:

console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
function num2String(num) {
  return num.toString();
}


console.log(num2String(41))

// Write a JavaScript program to convert a string to the number.

function string2Num(str) {
  num.parseInt(str);
}


console.log(string2Num('hello'))

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
function theType(value) {
      return typeof value;
}

theType('value')
theType(value)
theType(26)
theType(true)
theType(ETC)
  
// Write a JavaScript program that adds 2 numbers together.

function addNums(num1, num2) {
    return num1 + num2;
}


console.log(addNums(12, 10))

// Write a JavaScript program that runs only when 2 things are true.
// think of my own



function twoTrue(age, nerdyPassion) {
if (age && nerdyPassion > 25) {
  return true
}}

twoTrue(26, 'ANIME')



// Write a JavaScript program that runs when 1 of 2 things are true.
let trueOrFalse = 15

function whichIsTrue() {
if (trueOrFalse === 17 || trueOrFalse === 15) {
  return true;
} 
}

// Write a JavaScript program that runs when both things are not true.  
const robLikesSports = false
const robLovesAnime = true
const robHatesAnime = false
function twoFalse() {
   if (robLikesSports && robHatesAnime) {
      return false;
   } else {
     console.log('It will print this out if both variables in the if condition are not true')
   }
}
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
