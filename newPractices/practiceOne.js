/* eslint-disable default-case */
/**
 * Given a word determine if it is a palindrome - https://en.wikipedia.org/wiki/Palindrome
 */
const isPalindrome = (word) => {
  for(let i=0;i< Math.floor(word.length-1);i++){
      if(word[i] !== word[word.length-1-i]){
          return false;
      }
  }
  return true;
};

// console.log(isPalindrome("yonoaonoy"));





const isBalancedParenthesis = (word) => {
    const stack = [];

    const parenMap = {
        '{':'}',
        '[':']',
        '(':')'
    }

    for(const parens of word.split('')){
        if(parenMap[parens]){
            stack.push(parens);
            continue;
        }

        if(parens !== parenMap[stack.pop()]){
            return false;
        }
    }

    return stack.length === 0;
};

// console.log(isBalancedParenthesis("[[]]{}{{}}"));



const isPalindromeRec = (word, low, high) => {
    if(low >= high) {
        return true;
    }

    if(word[low] !== word[high]){
        return false;
    }


    return isPalindrome(word,low+1,high-1)
};


// isPalindromeRec("yonoy",0,4)



const fibonacci = (n) => {
    if(n<=1) return n;

    return fibonacci(n-1) + fibonacci(n-2)
};


const arr =[1,2,2,3,3,4,5,6,6]

const sanitaizeArr = (arr) => {
  const expectedArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i+1] ) {
      expectedArr.push(arr[i]);
    }
    
  }
  return expectedArr;

    // return [...new Set(arr)]
}


console.log(sanitaizeArr(arr))



const arrayDiff = (a, b) => {
   
   for (let i = 0; i < a.length; i++) {
    if(b.indexOf(a[i]) !== -1) {
       a.splice(i, 1);
       i--
    
     }
 }
   return a
  
}

console.log(arrayDiff([1,2,2,2,3],[2]));



const isValidWalk = (walk) => {
    let dx = 0;
    let dy = 0;
    let time = walk.length;

    for(let i=0;i<walk.length;i++){
      switch(walk[i]){
          case "n" : dy++; break;
          case "s" : dy--; break;
          case "w" : dx++; break;
          case "e" : dx--; break;
      }
      }
    return time === 10 && dx === 0 && dy === 0
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))

// =================================================================/
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

const findOutlier = (integers) => {
  let odd =[];
  let even = [];
  for(let i =0;i<integers.length;i++){
    if(integers[i] % 2 === 0){
      even.push(integers[i])
    } else {
      odd.push(integers[i])
    }
  }
  if(odd.length === 1 ){
    return odd[0]
  }
  else {
    return even[0]
  }
}


console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));