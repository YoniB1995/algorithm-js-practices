/**
 * Given a word determine if it is a palindrome - https://en.wikipedia.org/wiki/Palindrome
 */ 
const isPalindrome = (word) => {
   
};

// console.log(isPalindrome("yanannay"));


const isBalancedParenthesis = (word) => {

};

// console.log(isBalancedParenthesis("{{(())}}"));



const isPalindromeRec = (word, low, high) => {
    
};


// console.log(isPalindromeRec("yoaanoy",0,6))



const fibonacci = (n) => {
  
};

// console.log(fibonacci(10))

const arr =[1,2,2,3,4,4,5,6,6] //=> [1,2,3,4,5,6]

const sanitaizeArr = (arr) => {
   
}


// console.log(sanitaizeArr(arr))



//arrayDiff([1,2,2,2,3],[2]) == [1,3]

const arrayDiff = (a, b) => {
 
}

// console.log(arrayDiff([1,2,2,2,3],[2]));



const isValidWalk = (walk) => {
    
}

// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))




//returns odd / even number
const findOutlier = (integers) => {
    
}


// console.log(findOutlier([5,7,9,13,20,21,23,25]));



const solution = (number) => {
  
}

// console.log(solution(10)); // returns 3+ 5 +6 + 9 = 23



// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

const permutations = (string) => {
  
}


const matrixSum = [[1,2,3],[1,2,3],[1,2,3]]

const maxSum = (matrix) => {
    let sum =[0][0];
    for(let row=0;row< matrix.length;row++){
        for(let column =0;column<matrix[row].length;column++){
            sum+= matrix[row][column]
        }
    }
        return sum

};

// console.log(maxSum(matrixSum))



// const diagonalSum = function(mat) {
//     let sum = null;
//     let column = mat[row]
//     for(let row=0;row<mat.length;row++){
//        if( mat[mat.length-1-row][mat.length-1-row] == mat[row][column]){
//            sum =mat[mat.length-1-row][mat.length-1-row]
//        }
//     }
//     return sum
// };

// console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]))



const matrixTest = [[1,2,7],[3,6,12],[2,4,10]]


 const max = (matrix) => {
    let highestNum =[0][0];
    let column = 0;
    for(let row=0;row< matrix.length;row++){

        if(highestNum < matrix[row][matrix[row].length-1] ) {
            highestNum = matrix[row][matrix[row].length-1]
        }
        
    }
        console.log(highestNum)

};

console.log(max(matrixTest));