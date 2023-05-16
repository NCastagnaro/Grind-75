//5.16.2023
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.


const missingNumber = nums =>{

    for(let i = 0; i <= nums.length; i++){
        if(nums.indexOf(i) === -1) return i
    }
};

// Explanation:
// We iterate through the 'nums' array. We start at 0. Once we encounter an index where the indexOf() method
// returns -1, we know it is a value that is not present and we return that. 
//We want to go up until nums.length to account for an extra index. 

//For example: nums = [0,1]
//If we only iterated from i = 0 to i < nums.length, we would not be able to test for index of 2
// And we would return undefined, as opposed to our desired value of 2. If we have an array of unique 
//values starting at 0 and up until the value of nums.length -1, we need to test the next value outside of the array
