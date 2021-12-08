const canSum = (targetSum , numbers) => {
    if (targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers) {
        const remainder = targetSum - num;
        if ( canSum(remainder, numbers)=== true){
            return true;
        }
    }

    return false;
};

// console.log(canSum(7, [2,3])) ; // true
// console.log(canSum(7, [5,3,4,7])) ; // true
// console.log(canSum(7, [2,4])) ; // false
// console.log(canSum(8, [2,3,5])) ; // true
// console.log(canSum(300, [7,14])) ; // wont load , space complexity is too complex takes time for computer.

// Time Complexity = O(n^m)
// Space Complexity = O(m)


//==========================================================================================================
const canSumMemo = (targetSum , numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers) {
        const remainder = targetSum - num;
        if ( canSumMemo(remainder, numbers,memo)=== true){
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
};

console.log(canSumMemo(7, [2,3])) ; // true
console.log(canSumMemo(7, [5,3,4,7])) ; // true
console.log(canSumMemo(7, [2,4])) ; // false
console.log(canSumMemo(8, [2,3,5])) ; // true
console.log(canSumMemo(300, [7,14])) ; // wont load , space complexity is too complex takes time for computer.