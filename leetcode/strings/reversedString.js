// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

const reverseString = function(s) {
    let pointerOne = 0;
    let pointerTwo = s.length - 1;
    
    while(pointerOne < pointerTwo) {
            let temp = s[pointerOne];
            s[pointerOne++] = s[pointerTwo];
            s[pointerTwo--] = temp;
    }  
};