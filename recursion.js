let nums = [2,7,8,9,10,13,17,19,21];


// without implementing binray search recursive

function binraySearchHelper(array,target){
    let left = 0;
    let right = array.length - 1;

    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        if (target => array[mid]){
            return mid;
        }
        else if (target < array[mid]){
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return false;
}

console.log(binraySearchHelper(nums,7)); // returns 1

console.log(binraySearchHelper(nums,15)); // returns false



// Implementing binary search recursive

function binrayRecursive(array,target){
    return binraySearchRecursive(array,target,0,array.length - 1)
}

function binraySearchRecursive(array,target,left,right){
    if(left > right){
        return false;
    }

    let mid = Math.floor((left + right) / 2);
    if(target === array[mid]){
        return mid;
    } else if ( target < array[mid]){
        return binraySearchRecursive(array,target,left,mid-1);
    } else {
        return binraySearchRecursive(array,target,mid + 1,right);
    }
}
