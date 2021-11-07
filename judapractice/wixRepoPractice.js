/**
 * Given two words "a" and "b" determine if they are anagrams of one another - https://en.wikipedia.org/wiki/Anagram
 * Ignore letter case and white spaces
 */
// const isAnagram = (a,b) => {
//     if (sanitizedA.length !== sanitizedB.length) {
//     return false;
//   }

//   const aMap = createCharMap(sanitizedA);
//   const bMap = createCharMap(sanitizedB);

//   for (const char of aMap.keys()) {
//     if (bMap.get(char) !== aMap.get(char)) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isAnagram("yonibitew","bitewyoni"))
// Input: exp = “[()]{}{[()()]()}”
// Output: Balanced

// Input: exp = “[(])”
// Output: Not Balanced
/**
 *
 * Given an expression that is composed of 3 kinds of parenthesis "(","{" and "[", determine if the parenthesis are balanced.
 * @example [{}]() balanced
 * @example [{} not balanced (missing "]")
 * @example ([{}]() not balanced (missing a closing "(" for the first paren)
 * Hint: use a stack (https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) to keep track of opened parenthesis
 * Detailed solution: https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/
 */
const isBalancedParenthesis = (expression) => {
    
    return expression.trim()
};

// console.log(isBalancedParenthesis("   yoni bitew"))
/**
 * Given a word determine if it is a palindrome - https://en.wikipedia.org/wiki/Palindrome
 */
// const isPalindrome = (word) => {

// };
// recursion

/**
 * Given a number n calculate !n i.e n factorial - https://en.wikipedia.org/wiki/Factorial
 */ 
 const factorial = (n) => {
  if(n===0) return 1;
  return n*factorial(n-1);
};

// console.log(factorial(4))


/**
 * Given a number n calculate the nth fibonacci number - https://en.wikipedia.org/wiki/Fibonacci_number
 */ 
 const fibonacci = (n) => {

  if (n <= 1) {
    return n;
  }
      console.log(`${n} +`)

  return fibonacci(n - 1) + fibonacci(n - 2);
};


// console.log(fibonacci(10))
/**
 * Given a word determine if it is a palindrome in a recursive manner - https://en.wikipedia.org/wiki/Palindrome
 */
const isPalindrome = (word, low, high) => {
  if(low >= high) {
    return true;
  }

  if(word[low] !== word[high]){
    return false;
  }

  
  return isPalindrome(word,low+1,high-1)
};

// console.log(isPalindrome("juda",0,3))
    /**
 * Given a number n calculate the sum of numbers up to n in a recursive manner
 * for example - sum(4) = 4 + 3 + 2 + 1
 */
const sum = (n) => {

};