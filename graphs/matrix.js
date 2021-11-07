

let matrix = [[1,2,3],[2,3,4],[4,5,6]]
const checkIfTrue = (matrix) => {
    
    let num = 'Day';
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            console.log(`${matrix[row][column]}|`)
            
        }
        
    }
}

// checkIfTrue(matrix)


const matrixTest = [[1,2,7],[3,6,12],[2,4,10]]


 const max = (matrix) => {
    let highestNum =[0][0];
    let column = 0;
    for(let row=0;row< matrix.length;row++){

        if(highestNum < matrix[row][matrix[row].length-1] ) {
            highestNum = matrix[row][matrix[row].length-1]
        }
        
    }
        console.log(highestNum)

};

// max(matrixTest)

const matrixSum = [[1,2,3],[1,2,3],[1,2,3]]

const maxSum = (matrix) => {
    let sum =[0][0];
    for(let row=0;row< matrix.length;row++){
        for(let column =0;column<matrix[row].length;column++){
            sum+= matrix[row][column]
        }
    }
        return sum

};

// maxSum(matrixSum)

const diagonalSum = function(mat) {
    let sum = null;
    let column = mat[row]
    for(let row=0;row<mat.length;row++){
       if( mat[mat.length-1-row][mat.length-1-row] == mat[row][]){
           sum =mat[mat.length-1-row][mat.length-1-row]
       } 

    //     for(let column=0;column<mat[row].length;column++){
    //             if(row === column ||   row +column == mat[row].length-1){  
    //             // sum+= mat[row][column] 
    //             let sum = mat[mat.length-1-row][mat.length-1-row]
    //             }
    // }
    }
    return sum
};

console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]))


 const isMagicSquare = (matrix) => {
    let sum = null;
    for(let row = 0;row<matrix.length;row++){
        let(let col = 0;col< matrix[row].length ;col++){

        }
    }
};
// isMagicSquare([[2,2,2],[2,2,2],[2,2,2]])
console.log(isMagicSquare([[1,2,3],[4,5,6],[7,8,9]]))
