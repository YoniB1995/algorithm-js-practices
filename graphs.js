// edges list + vertices list;

const vertices = ['A','B','C','D','E'];

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


const adjacencyMatrix = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0]
]