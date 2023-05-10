// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

const longestPalindrome = string => {
    //initialize length to zero
    let length = 0;
    //Create a new Map to store the frequency of each character in the input string
    let map = new Map()

    //Loop over each character in the string
    //Inside the loop, the code checks if 'map' contains the current character. If it does, the code retrieves the frequency of the character from the 'map' using the get() method
   
    for(let char of string){
        let n = 0
        if(map.has(char)){
            n = map.get(char)
            if(n%2) length +=2; 
        }
        map.set(char,n+1)
    }
    return string.length > length ? length + 1: length
};