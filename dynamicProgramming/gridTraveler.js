// how many times can you travel to the final location , use only right and down.
// gridTraveler(1,1) => 1 way to travel.

// const gridTraveler = (m,n) => {
//     if(m === 1 && n === 1) return 1;
//     if(m === 0 || n === 0) return 0;
//     return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
// }

// console.log(gridTraveler(1,1)) // 1
// console.log(gridTraveler(2,3)) // 3
// console.log(gridTraveler(3,2)) // 3
// console.log(gridTraveler(3,3)) // 6
// console.log(gridTraveler(18,18)); // 2333607023 - wont load , space complexity is too complex takes time for computer.
// solution => memo.

// Time Complexity = O(2^n+m)
// Space Complexity = O(n+m)

//==========================================================================================================

const gridTravelerMemo = (m,n, memo ={}) => {
    const key = m + ',' + n;

    if(key in memo) return memo[key]
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;

    memo[key] = gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo);
    return memo[key];
}

console.log(gridTravelerMemo(1,1)) // 1
console.log(gridTravelerMemo(2,3)) // 3
console.log(gridTravelerMemo(3,2)) // 3
console.log(gridTravelerMemo(3,3)) // 6
console.log(gridTravelerMemo(18,18)); // 2333607023 

// Memoized
// Time Complexity = O(m * n)
// Space Complexity = O(n + m)

// Memoization Recipe
// - Visualize the problem as a tree.
// - implement the tree using recursion
// - test it

// - add a memo object
// - add a base case to return memo values
// - store return values into the memo

