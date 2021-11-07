// stack - using an array.

// const myStack = [];
// myStack.push('a');
// myStack.push('b');

// console.log(myStack); /// ['a','b'];
// myStack.pop(); // ['a']

// Maximally efficent stack : 0(1) time for push/pop.

// class StackNode{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor(){
//         this.top = null;
//         this.size = 0;
//     }

//     push(val){
//         if ( this.size === 0){
//             this.top = new StackNode(val);
//         } else {
//             const pushedNode = new StackNode(val);
//             pushedNode.next = this.top; // '(4,5)'
//             this.top = pushedNode;
//         }
//         this.size++;
//     }

//     pop(){
//         if (this.size === 0) return null;
//         const poppedNode = this.top;
//         this.top = this.top.next;
//         this.size--;
//         return poppedNode.val;
//     }

//     getTop(){
//         return this.top.val;
//     }
// }


// const myStack = new Stack();
// myStack.push('a');
// myStack.push('b');
// myStack.push('c');
// console.log(myStack)
// console.log(myStack.top)

// console.log(myStack.pop())




