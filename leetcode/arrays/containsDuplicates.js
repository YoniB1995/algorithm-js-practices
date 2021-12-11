// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true


var containsDuplicate = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                return true;
            }
        }
    }
    return false;
};

//Best solution runtime

var containsDuplicate = function(nums) {
    let set = new Set()
    for(let i = 0; i < nums.length; i++){
        if(!set.has(nums[i])){
            set.add(nums[i])
        }else return true
    }
    
    return false
};



