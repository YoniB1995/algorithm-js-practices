
class BinaryNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right =null;
        
    }


}

const a = new BinaryNode('a');
const b = new BinaryNode('b');
const c = new BinaryNode('c');
const d = new BinaryNode('d');
const e = new BinaryNode('e');
const f = new BinaryNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;


const breadthFirstPrint = (root) => {
    const queue = [root];

    while (queue.length > 0) {
        const curr = queue.shift();

        if (curr.left !==null) {
            queue.push(curr.left)
        }
        if (curr.right !==null) {
            queue.push(curr.right)
        }
    }
}

breadthFirstPrint(a); // returns all the nodes in the binary tree.