// Write a function 'sum' that takes an aray of numbers as input.
// the function should return the total sum of all elements.
// the function must be recursive.


const sum = ( array) => {
    if (array.length === 0) return 0;
    const rest = array.slice(1);
    return array[0] + sum(rest);
};

// Time : O (n*n) = O(n^2)
// Space : O(n)

sum([1,5,7,-2]) // returns 11;
sum([6,3,1]) // returns 10;



// Efficient Solution :

const betterSum = (array) => {
    return _sum(array,0);
}

const _sum = (array,idx) => {
    if (idx === array.length) return 0;
    return array[idx] + _sum(array,idx + 1);
}

// Time : O(n);
// Space : O(n);



//******************************* */ */
// fib - Write a function that takes in a number and returns the n-th number in the fibonacci sequence.
//the first two number can be calculated by taking the sum of the previous two.


/// fib(1) // 1
/// fib(2) // 1
/// fib(3) // 2
/// fib(4) // 3
/// fib(5) // 5
// fib(6) = fib(5) + fib(4)
// fib(n) = fib(n-1) + fib(n-2)


const fib = (n) => {
    if(n === 1 || n === 2) return 1;
    return fib(n-1) + fib(n-2);

}

console.log(fib(8))
console.log(fib(5))

// Time : O(2^n)
// Space : O(n)