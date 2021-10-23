// edges list + vertices list;

// const vertices = ['A','B','C','D','E'];

const edges = [
    ['A','B'],
    ['A','D'],
    ['B','C'],
    ['C','D'],
    ['C','E'],
    ['D','E'],
]


const findCloseNodes = (node) => {
    const closeNodes = [];
    let closeNode;
    for(let edge of edges){
        // edge = ['A','B'];
        const nodeIdx = edge.indexOf(node);
        if (nodeIdx > -1) {
            closeNode = nodeIdx === 0? edge[1] : edge[0];
            closeNodes.push(closeNode)
        }
    }
    return closeNodes;
}


// console.log(findCloseNodes('A'));

const isConnected = (node1,node2) => {
    return edges.some((edge) => {
        return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1
    })
}

// console.log(isConnected('A','D'));

const vertices = ['A','B','C','D','E'];

const adjacencyMatrix = [
    [0, 1, 0, 1, 0], // node A = [A,B,C,D,E] // connected to B + D
    [1, 0, 1, 0, 0], // node B = [A,B,C,D,E] // connected to A + C
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1], // node D = [A,B,C,D,E] // connected to A + C + E
    [0, 0, 1, 1, 0]
]

const vertexIdxs = {
    'A':0,
    'B':1,
    'C':2,
    'D':3,
    'E':4
}

// findCloseNodes
const findNodesMatrix = (node) => {
    const adjacentNodes = [];

    // get the row in the matrix
    for (let i = 0; i < vertices.length; i++) {
        let nodeVertex = vertexIdxs[node];
        if (adjacencyMatrix[nodeVertex][i] === 1){
            adjacentNodes.push(vertices[i])
        }
        
    }
    // loop through the row
    // if there is 1 , push that node
    // otherwise skip

    return adjacentNodes
}

// console.log(findNodesMatrix('A'))


// isConnected
const isNodesConnected = (node1 , node2) => {
    const nodeIdx1 = vertexIdxs[node1];
    const nodeIdx2 = vertexIdxs[node2];
    return !!adjacencyMatrix[nodeIdx1][nodeIdx2] // returns true / false 

}

console.log(isNodesConnected('E','B'))