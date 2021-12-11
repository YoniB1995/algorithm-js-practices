//Given an array, rotate the array to the right by k steps, where k is non-negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]



//Top Solutions Runtime & Memory 


var rotate = function(nums, k) {
     k = k % nums.length;
    
   let reverse = function(i, j){
    while(i < j){
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
        i++
        j--
    }
   } 
	reverse(0, nums.length-1); 
	reverse(0, k-1);
    reverse(k, nums.length-1)
    
};


//Best Solutions Memory 

var rotate = function(nums, k) {
    if(nums.length === 0) return nums;
     k %= nums.length;
    reverse (nums, 0 , nums.length - 1);
    reverse(nums,0,k-1);
    reverse(nums, k, nums.length - 1);
};

var reverse = (nums, start, end) => {
    while(start < end){
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start ++; 
        end --;
    }
}





