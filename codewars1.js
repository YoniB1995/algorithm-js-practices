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
