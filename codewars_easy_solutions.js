function modify(str,i,num){
    let arr = str.split(' ')
    return Array(num).fill(arr[i]).join('-');
}

console.log(modify('This is a string',3,5))


function testModify(str,i,num){
    let word = str.split(' ');
    let test = word[i];
    let counter = 0;
    while(counter < num - 1){
        test += `-${word[i]}`
        counter++
    }
}