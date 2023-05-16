//5.16.2023

// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101


const countBits = n => {
    let decimalNumArr = []    //Array that will house our decimal numbers
    let binaryArr = []       //Array that will house our binary numbers
    let oneCounterArr = []  //Array that will house the number of 1's present at each index
    oneCounterLength = 0    //Counter used to increment by one each time a '1' is encountered inside of our binaryArr

    //Push decimal numbers into an array
    for(let i = 0; i <= n; i++){
        decimalNumArr.push(i)
    }

    //convert the decimal numbers from our array into binary and push to binaryArr
    for(let val of decimalNumArr){
        binaryArr.push(BigInt(val.toString()).toString(2))
    }

    //Iterate through the binaryArr and for each index, we count the amount of 1's that are  present. 
    for(let i = 0; i < binaryArr.length; i++){
        for(let j = 0; j < binaryArr[i].length; j++){
            if(binaryArr[i][j] === '1'){
                oneCounterLength++
            } 
        }
        //We push the oneCounterLength to our oneCounterArray.
        oneCounterArr.push(oneCounterLength)
        //We set the counter back to zero for the next iteration
        oneCounterLength = 0
    }

    //At the very end, we return our oneCounterArr
    return oneCounterArr

};