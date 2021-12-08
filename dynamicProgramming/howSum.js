// Write a function howSum(targetSum, numbers) that takes in a targetSum
// and an array of numbers as arguments

// The function should return an array containing any combination of elements that add up
// to exactly the targetSum, then return null. 
// if there are multiple combination possible , you may return any single one.

const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(let num of numbers){
        const remainder = targetSum - num
        const remainderResult = howSum(remainder,numbers);
        if(remainderResult !== null) {
            return [...remainderResult, num];
        }
    }

    return null;
};
// m = target sum
// n = numbers.length
// time complexity = O(n^m * m)
// space : O(m)
// console.log(howSum(7, [2,3])) ; // true
// console.log(howSum(7, [5,3,4,7])) ; // true
// console.log(howSum(7, [2,4])) ; // false
// console.log(howSum(8, [2,3,5])) ; // true
// console.log(howSum(300, [7,14])) ; // wont load , space complexity is too complex takes time for computer.


// ======================================================================================================


const howSumMemo = (targetSum, numbers, memo ={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(let num of numbers){
        const remainder = targetSum - num
        const remainderResult = howSumMemo(remainder,numbers,memo);
        if(remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];
        }
    }

    memo[targetSum] = null;
    return null;
};

// m = target sum
// n = numbers.length
// time complexity = O(n*m*m) => O(n*m^2)
// space : O(m^2)

console.log(howSumMemo(7, [2,3])) ; // true
console.log(howSumMemo(7, [5,3,4,7])) ; // true
console.log(howSumMemo(7, [2,4])) ; // false
console.log(howSumMemo(8, [2,3,5])) ; // true
console.log(howSumMemo(300, [7,14])) ; // wont load , space complexity is too complex takes time for computer.