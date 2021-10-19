//Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


const reversedWord = (word) => {





    
    
    return word.split('').reverse().join('');
}






function solution(str) {
    let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(solution("yonibitew"))

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
    let arr = str.split(' ');
    return Array(n).fill(arr[i]).join('-');
} 
// console.log(modifyMultiply('This is a string',3,5))

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



//  * Given a number n calculate the nth fibonacci number - https://en.wikipedia.org/wiki/Fibonacci_number

const fibonacci = (n) => {
    
  if (n <= 1) {
    return n;
  }
  
  return fibonacci(n - 1) + fibonacci(n - 2);
};
// console.log(fibonacci(5))


//  * Given a word determine if it is a palindrome in a recursive manner - https://en.wikipedia.org/wiki/Palindrome


 const isPalindrome = (word, low, high) => {
  if (low >= high) {
    return true;
  }

  if (word[low] !== word[high]) {
    return false;
  }

  return isPalindrome(word, low+1, high-1);
};

// console.log(isPalindrome("daanaad",0,6))

/**
 * Given a number n calculate !n i.e n factorial - https://en.wikipedia.org/wiki/Factorial
 */
const factorial = (n) => {
    if (n===1) return 1;
    return n*factorial(n-1);
//   return n > 0 ? n * factorial(n - 1) : 1;
};
// console.log(factorial(5))


/**
 * Given a number n calculate the sum of numbers up to n in a recursive manner
 * for example - sum(4) = 4 + 3 + 2 + 1
 */
const sum = (n) => {
    if(n===0) return 0;
    return n+sum(n-1);
};

// console.log(sum(4))