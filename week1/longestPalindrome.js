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
    let length = 0;
    let obj = {}

    //Run a for loop that puts every character inside the object with its frequency as the value
    //If the value of the character is divisible by 2 we increment length by 2. 
    for(let char of string){
        obj[char] = (obj[char] || 0) + 1
        if(obj[char] % 2 == 0) length = length + 2
    }
    //If we come across a character with an odd value, we increment by 1 only one time because
    //only one odd numbered character can appear in a palindrome
    for(let key in obj){
        if(obj[key] %2 != 0) return length + 1
    }

    return length
};

//Explanation:
//e.g: We have 'abccccdd'
//We will create an object and store all the characters in there, with their respective values
//our object
//{
//     a:1,
//     b:1,
//     c:4,
//     d:2
// }
//
//We will have iterated through the string, while creating this object. And whenever the character is divisible by 2, we increment length by 2.
//So, we incremented length by 2 twice for the c character and once for the d character. That brings our length total to 6
//Note that we still have a and b as odd valued characters. We can only account for one odd valued character as a maximum in a palindrome.
//So, we include a condition as we iterate through the keys in our object, and once we encounter an odd valued character, we add 1 to our length and return that value
//If we don't have any odd valued characters in our object, that if statement will never fire and we will just retun length

