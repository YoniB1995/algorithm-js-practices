/**
 * Given two words "a" and "b" determine if they are anagrams of one another - https://en.wikipedia.org/wiki/Anagram
 * Ignore letter case and white spaces
 */
const isAnagram = (a, b) => {
  return solveWithMap(a, b);
};

// removes all spaces and lower case the string
const sanitize = (s) => s.toLowerCase().replace(/\s*/g, '');

const createCharMap = (word) => {
  const map = new Map();
  for (const char of word.split('')) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  return map;
};

// eslint-disable-next-line no-unused-vars
const solveWithMap = (a, b) => {
  const sanitizedA = sanitize(a);
  const sanitizedB = sanitize(b);

  if (sanitizedA.length !== sanitizedB.length) {
    return false;
  }

  const aMap = createCharMap(sanitizedA);
  const bMap = createCharMap(sanitizedB);

  for (const char of aMap.keys()) {
    if (bMap.get(char) !== aMap.get(char)) {
      return false;
    }
  }
  return true;
};

// eslint-disable-next-line no-unused-vars
const solveWithSorting = (a, b) => {
  const sanitizedA = sanitize(a);
  const sanitizedB = sanitize(b);
  return sanitizedA.split('').sort().join('') === sanitizedB.split('').sort().join('');
};


//  Given an expression that is composed of 3 kinds of parenthesis "(","{" and "[", determine if the parenthesis are balanced.
//  [{}]() balanced
//  [{} not balanced (missing "]")
//  ([{}]() not balanced (missing a closing "(" for the first paren)

function checkParanthesis(str) {
    let brackets = [];
    for (let i = 0; i < str.length; i++) {     
        if (str[i] === "(") {
            brackets.push(str[i]);
        } else if (str[i] === ")") {
            if (brackets[brackets.length - 1] === "(") brackets.pop();
            else brackets.push("#");
        }
    }
    return brackets;
}

// console.log(checkParanthesis('(((()))'));

// 
const isBalancedParenthesis = (expression) => {
  const stack = [];
  const parenthesisMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (const paren of expression.split('')) {
    if (parenthesisMap[paren]) {
      stack.push(paren);
      continue;
    }

    if (paren !== parenthesisMap[stack.pop()]) {
      return false;
    }
  }

  return stack.length === 0;
};
console.log(isBalancedParenthesis('[[][]]{}{{}}[]'))
/**
 * Given a word determine if it is a palindrome - https://en.wikipedia.org/wiki/Palindrome
 */
const isPalindrome = (word) => {
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// eslint-disable-next-line no-unused-vars
const oneLiner = (word) => word === word.split('').reverse().join('');