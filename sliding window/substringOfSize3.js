// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

// Example 1:
// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".

// Example 2:
// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".


const countGoodSubstrings = substring => {
    let counter = 0;
    for(let i = 0; i < substring.length - 2; i++){
        let set = new Set()
        set.add(substring[i])
        set.add(substring[i + 1])
        set.add(substring[i + 2])
        if(set.size === 3) counter++
    }
    return counter
}



//Explanation
//We need to initialize a counter, which we will increment everytime we have a unique value. We will run a for loop. But, since we are looking for unique substrings of 
//length 3, we need to iterate up until substring.length - 2. 
//(As an example, a string like 'abccdaz' as an example will go up to the 'd'. That is because subsrting.length in this example is 7. 
//And we will go up until i < substring.length - 2, which means up until i < 5, which means i = 4 is our last index where we will iterate. We do this because as long as we go up until 
//that index, it will cover all the substrings we need. On that last iteration of i = 4, set.add(substring[i]) will add the 'd' to the set, i+1, will add the 'a' to the set,
// and i+2 will add the 'z' to the set.)
//And we have an if statement that tests to see if the set.size has a size of 3. If so, then we know it's a unique set and we will increment the counter. 
//That's because a 'Set' object in JS is a collection of unique values i.e. it doesn't allow duplicates. 





// Here's a list of the built-in methods for a Set in JavaScript:

// 1. add(value): Adds a value to the set.
// 2. clear(): Removes all elements from the set.
// 3. delete(value): Removes the specified value from the set.
// 4. entries(): Returns a new Iterator object that contains an array of [value, value] for each element in the set, in the insertion order.
// 5. forEach(callbackFn, thisArg): Calls a function for each element in the set.
// 6. has(value): Returns a boolean indicating whether an element with the specified value exists in the set or not.
// 7. values(): Returns a new Iterator object that contains the values for each element in the set, in the insertion order.
// 8. keys(): This is an alias for the values() method.
// 9. size: Returns the number of elements in the set.
// 10. Note that Set objects are ordered: elements are added in the order in which they were inserted. Also, the order is guaranteed to be the same between different JavaScript engines.
