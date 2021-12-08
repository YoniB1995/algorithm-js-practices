// Write a function bestSum(targetSum, numbers) that takes in a targetSum
// and an array of numbers as arguments

// The function should return an array containing the shortest combination of numbers that add up
// to exactly the targetSum
// if there is a tie for the shortest combination, you may return any one of the shortest.



const bestSum = (targetSum, numbers) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder,numbers);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            //if the combination is shorter than the current "shortest" , update it.
            if(combination.length < shortestCombination.length || shortestCombination === null) {
                shortestCombination = combination;
            }
        }
    }

    return shortestCombination;
};

// m = target sum
// n = numbers.length
// Brute Force
// time complexity = O(n^m * m)
// space : O(m^2)

// console.log(bestSum(7,[5,3,4,7])); // [7]
// console.log(bestSum(8,[2,3,5])); // [3, 5]
// console.log(bestSum(8,[1,4,5])); // [4, 4]
// console.log(bestSum(100,[1,2,5,25])); // [25, 25, 25, 25] -- wont load fast.




const bestSumMemo = (targetSum, numbers, memo ={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSumMemo(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            //if the combination is shorter than the current "shortest" , update it.
            if(combination.length < shortestCombination.length || shortestCombination === null) {
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
};


// m = target sum
// n = numbers.length
// Memo Method
// time complexity = O(m^2 * n)
// space : O(m^2)


console.log(bestSumMemo(7,[5,3,4,7])); // [7]
console.log(bestSumMemo(8,[2,3,5])); // [3, 5]
console.log(bestSumMemo(8,[1,4,5])); // [4, 4]
console.log(bestSumMemo(100,[1,2,5,25])); // [25, 25, 25, 25] 
