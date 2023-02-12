// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const isAnagram = (s, t) => {
    if(s.length !== t.length){
        return false;
    }
    let obj1 = {};
    let obj2 = {};
    
    for(let val of s){
        obj1[val] = (obj1[val] || 0) + 1;
    }
    
    for(let val of t){
        obj2[val] = (obj2[val] || 0) + 1;
    }
    
    for(key in obj1){
        if(obj1[key] !== obj2[key]){
            return false
        }
    }
    return true;    
};

//Explanation:
// We create a couple objects. We iterate through both strings, putting the characters for the first string into one object and the characters for the second string into the second object
//We then iterate through the keys in object 1(we could have iterated through object 2. It doesn't matter)
//And if we come across an instance where the value for one of the keys in obj1 does not match the value for the key in obj2,
//we know that the frequency of the characters does not match and we will return 'false' to signify they aren't anagrams
//If we loop through all the keys and the if statement does not fire, we know we have an anagram. So, we will return 'true'