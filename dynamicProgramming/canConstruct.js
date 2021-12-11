// Write a function canConstruct(target, wordBank) that accepts a target string and an array of strings.

// The function should return a boolean indicating whether or not the 'target' can be constructed by concatenating elements of the 'wordBank array.
// You may reuse elements of 'wordBank' as many times as needed.

const canConstruct = (target, wordBank) => {
    if (target === '') return true;

 for (let word of wordBank) {
     if(target.indexOf(word) === 0){
         const suffix = target.slice(word.length);
         if(canConstruct(suffix, wordBank) === true){
             return true;
         }
     }
 }

 return false;
};

// Time Complexity - O(n^n*m)
// Space Complexity - O(m^2)

// console.log(canConstruct("abcdef", ["ab","abc","cd","def","abcd"
// ])) // true
// console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) // false
// console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))// true
// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeee", "eeeee", "eeeeee"])); // false // wont load because of time





const canConstructMemo = (target, wordBank, memo= {}) => {
    if(target in memo) return memo[target];
    if (target === '') return true;

 for (let word of wordBank) {
     if(target.indexOf(word) === 0){
         const suffix = target.slice(word.length);
         if(canConstructMemo(suffix, wordBank, memo) === true){
             memo[target] = true;
             return true;
         }
     }
 }
 memo[target]=false;
 return false;
};

// Time Complexity - O(n * m^2)
// Space Complexity - O(m^2)

console.log(canConstructMemo("abcdef", ["ab","abc","cd","def","abcd"
])) // true
console.log(canConstructMemo("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) // false
console.log(canConstructMemo("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))// true
console.log(canConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeee", "eeeee", "eeeeee"])); // false // wont load because of time