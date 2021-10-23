//Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"

// Solution
// function likes(names) {
//    names = names || [];
  
//   switch(names.length) {
//       case 0:
//       return 'no one likes this';
//       break;
//       case 1:
//       return `${names[0]}`+ " likes this";
//       break;
//       case 2:
//       return `${names[0]}`+ " and " + `${names[1]}`+ " like this";
//       break;
//       case 3:
//       return `${names[0]}`+ ", " + `${names[1]}`+ " and " + `${names[2]}` +" like this";
//       break;
//       default:
//             return `${names[0]}`+ ", " + `${names[1]}`+ " and " + `${names.length - 2}` +" others like this";

//       break;
//   }
// }

//**************************************************************************/

// Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
// Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
// Test.expect(!isValidWalk(['w']), 'should return false');
// Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

//Solution 
// function isValidWalk(walk) {
//   var dx = 0 (left or right)
//   var dy = 0 (up or down)
//   var dt = walk.length
  
//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case 'n': dy--; break
//       case 's': dy++; break
//       case 'w': dx--; break
//       case 'e': dx++; break
//     }
//   }
  
//   return dt === 10 && dx === 0 && dy === 0
// }

//Solution 2 -Better
// function isValidWalk(walk) {
//   let res = {n:0, w:0, s:0, e:0};
//   walk.forEach((c) => res[c]++);
//   return walk.length === 10 && res.n == res.s && res.e == res.w;
// }

//**************************************************************************/

//My Solution
// function findOutlier(integers){
//   let odd = [];
//   let even = [];
//   if(integers.length >= 2) {
//     for (let i=0;i<integers.length;i++){
//       if(integers[i] % 2 === 0) {
//         odd.push(integers[i])
//       }
//       else {
//         even.push(integers[i])
//       }
//     }
//   }
//      if(odd.length === 1) {
//     return odd[0]
// } else {
//     return even[0]
// }
// }

// console.log(findOutlier([3,5,7,9,12,13,15]))

//Short Solution
// function findOutlier(int){
//   var evens=[],odds=[];
//   int.forEach((num)=> num% 2 !=0? odds.push(num):evens.push(num) );
//   return odds.length>1? evens[0]: odds[0];
//   }
// console.log(findOutlier([3,5,7,9,12,13,15]))

//**************************************************************************/

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Solution

// function solution(number){
//   let multiple = 0;
//   for(let i = 0; i<number;i++){
    
//     if(i%3==0 || i %5==0){
//       multiple += i;
//   }
//     }
//   return multiple;
// }

//**************************************************************************/
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// My Solution : 
// function moveZeros(arr) {
//  let zero = []
//   let others = []
//   let together = []
  
//     for (let i =0; i <= arr.length-1; i++){
//       if (arr[i] === 0){
//         zero.push(arr[i])
//         }
//       else{ 
//         others.push(arr[i])
//       }
//     }
//   together = others.concat(zero)
//   return together
// }

// console.log(moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]))


//Best Practice Solution

// function moveZeros() {
//   let result = arr.filter(c => c !== 0)
//   let count = arr.length - result.length
  
//   return result.concat(Array(count).fill(0))
// }

//**************************************************************************/
// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

//Wrong Solution - Time Complexity
// function isPrime(num) { 
// if (num < 2) return false;  
// for (var i=2; i<num; i++) {  
// if (num % i == 0) {  
// return false;}}  
// return true;  
//   }

//Best Solution :
// function isPrime(num) {
//   if (num < 2) {
//      return false;
//   }
// if (num === 2) {
//      return true;
//   }
  
//   const maximumDividor = Math.sqrt(num) + 1;
// for (let i = 2; i < maximumDividor; i++) {
//      if (num % i === 0) {
//        return false;
//      }
//   }
// return true;
// }

//**************************************************************************/

//My Solution: 
function validParentheses(parens){
  var stack = [],
    i;
  
  for (i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      stack.push(parens[i]);
    }
    else if('(' !== stack.pop()) {
      return false;
    }
  }
  
  return stack.length === 0;
}


//Best Solution :
// function validParentheses(parens){
//   var n = 0;
//   for (var i = 0; i < parens.length; i++) {
//     if (parens[i] == '(') n++;
//     if (parens[i] == ')') n--;
//     if (n < 0) return false;
//   }
  
//   return n == 0;
// }



//**************************************************************************/

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz"
    .split("").every((x)=> {
      return string.indexOf(x) !== -1;
  });
}


//**************************************************************************/

// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

//permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']



function permutations(string) {
  if (!!string.length && string.length < 2 ){
      return [string]
   }
   const arr = [];
   for (let i = 0; i < string.length; i++){
      let char = string[i]
      if (string.indexOf(char) != i)
         continue
         let remainder = string.slice(0, i) + string.slice(i + 1, string.length)
         for (let permutation of permutations(remainder)){
            arr.push(char + permutation)
         }
   }
   return arr
}

//**************************************************************************/

//Simpe Pig Latin
//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// function pigIt(str){
//   str = str.trim().split(/\s{1,}/);
//     return str.map(val => {
//         if (/^[A-Za-z]+$/.test(val)) {
//             return `${val.slice(1)}${val.slice(0, 1)}ay`;
//         }
//         return val;
//     }).join(' ');
// }

//Best solution 
// function pigIt(str) {
//   return str.replace(/\w+/g, (w) => {
//     return w.slice(1) + w[0] + 'ay';
//   });
// }

// //Best Solution #2
// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }


//**************************************************************************/
//Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.
// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘

function getPINs(observed) {
  let combos = [];
	let neighbors = {
		"0": ["8"],
		"1": ["2", "4"],
		"2": ["1", "3", "5"],
		"3": ["2", "6"],
		"4": ["1", "5", "7"],
		"5": ["2", "4", "6", "8"],
		"6": ["3", "5", "9"],
		"7": ["4", "8"],
		"8": ["5", "7", "9", "0"],
		"9": ["6", "8"]
	};
	let strDigits = observed.toString().split("");
  
	getCombos(strDigits, 0, "");
	return combos;


	function getCombos(digits, idx, curCombo) {

		let curDigit = digits[idx];
		let candidates = new Set(neighbors[curDigit]);
		candidates.add(curDigit);

		candidates.forEach(idx == digits.length - 1 ? reachedEnd : goDeeper);

		function reachedEnd(candidate) { combos.push(curCombo + candidate); }
		function goDeeper(candidate) {
			getCombos(digits, idx + 1, curCombo + candidate)
		}
	}
}