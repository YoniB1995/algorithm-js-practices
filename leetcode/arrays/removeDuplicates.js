// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const removeDuplicates = (nums) => {
    if(nums.length==1){
        return 1;
    } else {
        let res=[nums[0]];
        let k=1;
        nums.forEach((i,ix)=>{
            if(!res.includes(i)){
                res.push(i);
                nums[k]=i;
                k++;
            }
        })  
        return res;
    }
};

console.log(removeDuplicates([1,1,2,3,3,4,4,2,5,6,7]))


// const removeDuplicates = (nums) => {
//     let i = 0;
//     for (let j = 1; j <nums.length; j++) {
//         if (nums[j] !== nums[i]) {
//             i++;
//             nums[i] = nums[j];
//         }
//     }
//     return i + 1;
// };

// console.log(removeDuplicates([1,1,2,3,3,4,4,2,5,6,7]))


//  const removeDuplicates =(nums) => {
//     let front = 0;

//     for (let i = 0; i < nums.length; i += 1) {
//         if(nums[front] !== nums[i]) {
//             front += 1;
//             nums[front] = nums[i];
//         }
//     }

//     return front + 1;
// };

// removeDuplicates([1,1,3])