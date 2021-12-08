// A = [1,3,6,4,1,2] returns 5;

// given an array A of N integers returns the smallest positive integer ( greater than 0 ) that does not occur in A

// function findNumber(values) {
//   let result = [];

//   for (let i = 0; i < values.length; ++i) {
//     if (0 <= values[i]) {
//       result[values[i]] = true;
//     }
//   }

//   for (let i = 1; i <= result.length; ++i) {
//     if (undefined === result[i]) {
//       return i;
//     }
//   }

//   return 1
// }

// console.log(findNumber([1,3,6,4,1,2]));


// given a binary tree T consisting of N nodes, returns its number of visible nodes. for example, given the tree shown in the figure above - the function should return 4 .

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var goodNodes = function(root) {
    let count = 0;
    function good(root, max){
        if(root == null) return; 
        if(root.val >= max){
            count++;
            max = root.val; 
        } 
        good(root.left, max)
        good(root.right, max)
    }
    good(root, root.val); 
    return count; 
};

// Runtime: 152 ms, faster than 83.53% of JavaScript online submissions for Count Good Nodes in Binary Tree.
// Memory Usage: 59.4 MB, less than 74.21% of JavaScript online submissions for Count Good Nodes in Binary Tree.


var goodNodes = function(root, maxSoFar = -Infinity) {
    if(root === null) return 0;
        
    const total = root.val >= maxSoFar ? 1 : 0;  
    return total + goodNodes(root.left, Math.max(root.val, maxSoFar)) + goodNodes(root.right, Math.max(root.val, maxSoFar));
};

const T =  (8, (2, (8, null , null), (7, null, null)), (6,null,null))

// const bin = T.toString(2);

// console.log(bin)

console.log(window.TreeStructure)