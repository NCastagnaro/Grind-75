// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

const sortedSquares = nums=> {
    let arr = []
    for(let val of nums){
        arr.push(val **2)
    }
    arr.sort((a,b) => a-b)
    return arr
};

//Explanation:
//We first push each squared value from the original array into our 'arr' that we created. 
//And then we have to make sure that these values are ordered in non-decreasing/ascending order.
//So, we use the sort() method on that array to order them in ascending order. 