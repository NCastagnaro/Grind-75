//2.13.23
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]       3/2 = 1.5    n = 2    2 > 1.5 
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]  7/2 = 3.5  n = 4   4 > 3.5 
// Output: 2


const majorityElement = arr => {
    let n = (arr.length/2)
    let obj = {}

    for(let val of arr){
        obj[val] = (obj[val] || 0) + 1
    }

    for(let key in obj){
        if(obj[key] > n) return key
    }
}


//Explanation: 
//We set n equal to the arr.length/2. Then, we create an object where we will put all of our array values into, and account for their frequency.
//Then, we iterate through the object. If the key has a value greater than n, we know it is a majority element. 
//Note: we are told that there will always be a majority element. So, we don't have to inclue a line to return false if the if statement doesn't fire inside of our object iteration
//because it should always fire. 