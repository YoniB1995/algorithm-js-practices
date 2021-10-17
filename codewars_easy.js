//Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
    let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}


//best Practice
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}


//Example
// modifyMultiply ("This is a string",3,5)

// Should return

// "string-string-string-string-string"

// Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

function modifyMultiply(str,i,n) {
  return Array(n).fill(str.split(' ')[i]).join('-');
} 


function modifyMultiply2 (str,loc,num) {
//Code here
let words = str.split(" ")
let counter = 0
let test = words[loc]
while(counter < num - 1){
  test += `-${words[loc]}`
  counter++
}
return test
} 