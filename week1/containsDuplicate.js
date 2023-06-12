//2.10.23
// Given an integer array nums, return true if any value appears at least twice in the array, 
//and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

const containsDuplicate = nums =>{
    let obj = {}

    for(let val of nums){
        obj[val] = (obj[val] || 0) + 1
    }

    for(let key in obj) {
        if(obj[key] > 1) return true
    }

    return false
}

//Explanation:
// We create an object. We iterate through the array, putting the numbers inside the object
//We then iterate through the keys in object. And if we come across an instance where the value 
//for one of the keys in the object have a value greater than 1, we know its a duplicate.
