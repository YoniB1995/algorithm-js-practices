
// class BinaryNode{
//     constructor(val){
//         this.val = val;
//         this.left = null;
//         this.right =null;
        
//     }


// }

// const a = new BinaryNode('a');
// const b = new BinaryNode('b');
// const c = new BinaryNode('c');
// const d = new BinaryNode('d');
// const e = new BinaryNode('e');
// const f = new BinaryNode('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.left = f;


// const breadthFirstPrint = (root) => {
//     const queue = [root];

//     while (queue.length > 0) {
//         const curr = queue.shift();

//         if (curr.left !==null) {
//             queue.push(curr.left)
//         }
//         if (curr.right !==null) {
//             queue.push(curr.right)
//         }
//     }
// }

// breadthFirstPrint(a); // returns all the nodes in the binary tree.



// const bfs = (root,target) => {
//     const queue = [root];

//     while (queue.length > 0) {
//         const curr = queue.shift();

//         if(curr.val === target) {
//             return true;
//         }
//         if (curr.left !==null) {
//             queue.push(curr.left)
//         }
//         if (curr.right !==null) {
//             queue.push(curr.right)
//         }
//     }
//     return false;
// }

// bfs(a,"b") // true
// bfs(a,"e") // false

// ================================================================================/


// Write a function , sumTree(root), that takes in the root of a binary tree as an argument.

//The function should return the total sum of all values in the tree. You can assume that the tree only contains number values.

// const a = new Node(3);
// const b = new Node(2);
// const c = new Node(7);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(5);


// const sumTree(root) {
//     const queue = [root];
//     let sum = 0;
//      while (queue.length > 0) {
//         const curr = queue.shift();
//         sum += curr.val;
//         if(curr.val === target) {
//             return true;
//         }
//         if (curr.left !==null) {
//             queue.push(curr.left)
//         }
//         if (curr.right !==null) {
//             queue.push(curr.right)
//         }
//     }
//     return false;
// }

// sum(a) // returns 19;


// ================================================================================/


//Depth-First Algorithm

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }

}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right= f;

const getAllBinaryNodes = (root) => {
    const stack = [root];

    while (stack.length >0){
        const curr = stack.pop();
        if(curr.left !== null){
            stack.push(curr.left);
        }
        if(curr.right !== null){
            stack.push(curr.right);
        }
    }
}