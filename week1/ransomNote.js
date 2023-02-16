// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true


const canConstruct = (ransomNote, magazine) => {
    let ransomCounter = {}
    let magazineCounter = {}
 
    for(let val of ransomNote){
        ransomCounter[val]  =(ransomCounter[val] || 0) + 1
    }
      
       for(let val of magazine){
        magazineCounter[val]  =(magazineCounter[val] || 0) + 1
    }
    for(let key in ransomCounter) {
        if(magazineCounter[key] === undefined) {
        return false
        }
        if(ransomCounter[key] > magazineCounter [key]) {
        return false
        }
 }
 return true
 }

//Explanation:
//We set up objects that we can pass our string values into 
//Then, we iterate over the keys in ransomCounter. We need to make sure that these characters are present in our magazineCounter. 
//So, our first if statement checks to see if that key value is undefined in the magazineCounter, we will return false. This confirms that all keys in ransomCounter are also in magazineCounter
//And then we have another if statement to check if the frequency of our keys in the ransomCounter are greater than any of the keys in our magazineCounter. If so, we will return false
//It's important to not just use if(ransomCounter[key] > magazineCounter [key]). That won't satisfy all test conditions. Let's say we have a ransom key of 'a' that isn't present
//in the magazineCounter. So, when we move down to the second if statement and we test ransomCounter['a'] > magazineCounter['a']... we would hope that this is true and fires, so that we can return false, but
//this simplifies to 1 > undefined, which is not true and would return false, therefore, the if statement would not fire. That is why we have to account for undefined values
//with that first if statement. 

// In JavaScript, when you compare a number with undefined using the greater than (>) operator, the result is always false.
// This is because when a comparison is made between a number and undefined, the undefined value is converted to NaN (Not a Number) 
// which is a special value that represents an unrepresentable or undefined value in the Number data type.
// When a comparison is made between NaN and any other value, including numbers, the result is always false. Therefore, the expression 1 > undefined 
// will always return false in JavaScript.
















