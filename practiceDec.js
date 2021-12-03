let arr = ["yoni","yoav","dani","yoni","dani","shlomo","yossi"]

const filterArr = (theArr) => {
    let orderArr = theArr.sort();
    let filArr = [];
    for(let i=0;i<orderArr.length;i++){
        if(orderArr[i] !== orderArr[i+1]){
            filArr.push(orderArr[i])
        }
    }

    return filArr
    
}

console.log(filterArr(arr))