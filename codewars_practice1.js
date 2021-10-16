//Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"

// const peoplesLike = (people) => {
//     people = people || [];

    
//     switch(people.length){
//         case 0 :
//             return 'no one likes this'
//         case 1:
//             return `${people[0]} likes this`
//         case 2:
//             return `${people[0]} and ${people[1]} like this`
//         case 3:
//             return `${people[0]}, ${people[1]} and ${people[2]} like this`
//         default:
//             return `${people[0]} and ${people.length-1} others like this`

//     }
// }


// console.log(peoplesLike(['Yoni','Dani','Shmuel','Yosi','Shmuel']))



//=============================================================================//

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.


// const returnSum = (num) => {
//     let sumNum = 0;
//     if (num < 0) {
//         return 'negative'
//     }
//     for(let i = 0 ; i < num; i++) {
// if ( i % 3 === 0 || i % 5 === 0){
//     sumNum += i;
//     }
//     }
//     return sumNum;
// }

// console.log(returnSum(20))


//=============================================================================//
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary( a, b ){
  var sum = a + b,
  		binary = '';

  while ( sum > 0 ) {
    binary = ( sum % 2 ) + binary;
    console.log(binary)
    sum = Math.floor( sum / 2 );
  }

  return binary;
}

console.log(addBinary(10,11))

const addNewBinary = (a,b) => { return (a+b).toString(2) } 
console.log(addNewBinary(10,11))


//=============================================================================//

//You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.










//=============================================================================//
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


// function moveZeros(arr){

//     let zeros = [];
//     let all = [];

//     for(let i=0;i<arr.length;i++){
//         if (arr[i]===0 ){
//             zeros.push(arr[i])
//         } else {
//             all.push(arr[i])
//         }
//     }

//     const result = all.concat(zeros);
//     return result;

// }



// console.log(moveZeros([false,0,0,0,0,2,3,5,0,1,2,0,1,3,"a"]))










//=============================================================================//
// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.














//=============================================================================//

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.














//=============================================================================//
// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

//permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']























//=============================================================================//

//Simpe Pig Latin
//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

























//=============================================================================//
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