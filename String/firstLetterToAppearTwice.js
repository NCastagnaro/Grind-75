//4.27.23
//Leetcode #2351 - First Letter to Appear Twice - Easy 

// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

// Note:
// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.
 

// Example 1:
// Input: s = "abccbaacz"
// Output: "c"
// Explanation:
// The letter 'a' appears on the indexes 0, 5 and 6.
// The letter 'b' appears on the indexes 1 and 4.
// The letter 'c' appears on the indexes 2, 3 and 7.
// The letter 'z' appears on the index 8.
// The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.


//Solution: 

const repeatedCharacter = s => {
    
    let obj = {}
    
    for(let val of s){
        obj[val] = (obj[val] || 0) + 1
        if(obj[val] === 2) return val
    }
};


//Explanation: We created an object in which we will store our characters from string 's'
//As we iterate through the string, we add the characters to our object. 
//Once we encounter a character that has a value of 2, we know it is a duplicate and we return it.

