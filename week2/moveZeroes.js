//2.13.23
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

const moveZeroes = nums => {
    let nonZeroIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[nonZeroIndex] = nums[i]
            nonZeroIndex++
        }
    }
    for(let i = nonZeroIndex; i < nums.length; i++){
        nums[i] = 0
    }
}

//Explanation: 
//We have to move all the zeroes to the end of the array, while keeping the same order of all the other numbers.
//So, we first need a nonZeroIndex variable. This will be used to assign the indexes, for the non-zero values. 
//When we iterate through our for loop, if we encounter a variable that is not zero, we assign it to the nonZeroIndex value.
// So, with this array: [0,1,0,3,12], we iterate through and we assign to the 1 to the zeroeth index, and increment the nonZeroIndex value.
//So, when we encounter the 3, we are able to assign it to the 1st index, and then increment the nonZeroIndex value again to 2. So,
//when we encounter 12, we are able to assign it to the 2nd index, and incremenet nonZeroIndex one more time to a value of 3.
//
//So, when we run our second for loop, we start at the nonZeroIndex value of the third index and just assign all the indexes to have 0
//until we reach the last index. 

