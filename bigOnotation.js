const foo = (n) => {
    const result = 0;

    for (let i=0;i <5 ; i++){
        result += n;
    }

    return result;
};

foo(4) // 20


///
const bar = (array) => {
    return array[0] * array[array.length - 1];
}

bar([3,5,1,4,7]); // 3* 7 = 21;