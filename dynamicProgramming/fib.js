//======================================================================
// const foo = (n) => {
//     if (n<=1) return 1;
//     return foo(n-1);
// }; 
// Time Complexity - O(n) time
// Space Complexity - O(n) space

//======================================================================
// const fib = (n) => {
//     if (n<=2) return 1;
//     return fib(n-1) + fib(n-2);
// }; 
// Time Complexity - O(n) time
// Space Complexity - O(n) space


//======================================================================
// const dib = (n) => {
//     if (n<=2) return 1;
//     dib(n - 1);
//     dib(n - 1);
// }; 
// Time Complexity - O(2^n) time
// Space Complexity - O(n) space


// Memoization - JS Objects , keys will be arg to fn , value will be the return value
// reduces the recursive calls.
const fibMemo = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    return memo[n]
}

console.log(fibMemo(6)) // ==> memo {3:2 , 4:3 , 5:5 , 6:8} // return 8;
console.log(fibMemo(8)) // ==> memo {3:2 , 4:3 , 5:5 , 6:8, 7:13, 8:21} // return 21;
console.log(fibMemo(17))


//======================================================================
