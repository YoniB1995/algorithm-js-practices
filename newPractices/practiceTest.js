/**
 * Given a word determine if it is a palindrome - https://en.wikipedia.org/wiki/Palindrome
 */
const isPalindrome = (word) => {
    for(let i=0;i<word.length;i++){
        if(word[i] !== word[word.length-1-i]){
            return false;
        }
    }
    return true
};

// console.log(isPalindrome("yonaaoonoy"));





const isBalancedParenthesis = (word) => {

};

// console.log(isBalancedParenthesis("[[]]{}[{{}}"));



const isPalindromeRec = (word, low, high) => {

};


// console.log(isPalindromeRec("yornoy",0,5))



const fibonacci = (n) => {
  
};

// console.log(fibonacci(10))

const arr =[1,2,2,3,4,4,5,6,6]

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


// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));