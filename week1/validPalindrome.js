// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.


const isPalindrome = string => {
    stringUpdated = string.replace(/[^a-z0-9]/gi,"").toLowerCase();

    let reverseString = stringUpdated.split('').reverse().join('')
    if(reverseString === stringUpdated) return true
    return false
}

//Explanation: The replace() method returns a new string with one, some, or all matches
//of the pattern replaced by a replacement. The pattern can be a string or RegExp, and the replacement 
//can be a string or a function called for each match. 
//This regex expression is set up to replace all non-alphanumeric characters and spaces with nothing.


