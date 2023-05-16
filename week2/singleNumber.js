//5.16.2023

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

const singleNumber = nums => {

    let obj = {}

    for(let val of nums){
        obj[val] = (obj[val] || 0) + 1
    }

    for(let key in obj){
        if(obj[key] === 1) return key
    }
}


//Explanation: 
//We create an object that stores the frequency of each value from our nums array. 
//We then iterate over the keys in our object. And when we encounter a key that has a frequency of 1, we return it. 