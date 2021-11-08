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