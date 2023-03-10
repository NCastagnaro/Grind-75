// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1



const search = (nums,target) => {
    let start = 0
    let end = nums.length - 1
    let middle = Math.floor((start + end)/2)

    while(start < end && nums[middle] !== target){
        if(nums[middle] > target){
            end = middle - 1
        }
        else{//nums[middle] < target
            start = middle + 1
        }

        middle = Math.floor((start + end)/2)
    }
    //will return index of target (aka 'middle' variable)
    if(nums[middle] === target) return middle

    //if target is not found in array, we will return -1 
    return -1
}