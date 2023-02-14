//2.14.23 --- Codility Example Question 

// Write a function that, given an array A of N integers, returns the smallest positive integer(greater than 0) that does not occur in A.A

// For example: 
// Given A = [1,3,6,4,1,2] the function should return 5
// Given A = [1,2,3] the function should return 4
// Given A = [-1,-3] the function should return 1

const lowestVal = arr => {
    let lowestVal = 1
    for(let val of arr){
        if(!arr.includes(lowestVal)) return lowestVal
        else lowestVal++
    }
}

//Explanation: 
//We created a variable called 'lowestVal', which represents the lowest val we want to return.
//We iterate through our for loop. On each iteration if we check to see if the array does not include the lowestVal. 
//If that doesn't fire, meaning the current lowestVal value is present in the array, we will fire the else statement,
//which will increment the lowestVal value. On each iteration, we check if the lowestVal value is present, which starts at 1
//And as we iterate through the array, we will only fire that if statement when we reach a lowestVal value that is not present in the array. 

//Methods/Processes used
//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
