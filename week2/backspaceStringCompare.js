//5.16.2023

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

// Example 1:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:
// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Example 3:
// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

let backspaceCompare = function(s, t) {
    //create two arrrays to use as stacks to push and pop from
    let arr1 = []
    let arr2 = []
    
    //if the character does not equal '#' we push it onto the stack. If '#' appears at any point, we pop from our array. If a '#' appears before a character, it won't matter
    //because we will just be popping an empty array. And if a '#' appears after a character, it will pop the character off the stack that we previously pushed onto it.  
    //We make sure to pop the last element from our stack 
    for(let i = 0; i < s.length; i++){
          if(s[i] !== '#') arr1.push(s[i])
          if(s[i] === '#') arr1.pop()
    }
  

      for(let i = 0; i <t.length; i++){
          if(t[i] !== '#') arr2.push(t[i])
          if(t[i] === '#' && i !== 0) arr2.pop()

    }
    

    let updatedString = arr1.join('')
    let updatedString2 = arr2.join('')

    if(updatedString === updatedString2) return true
    else return false
};


//Run through:
//s = '##abc##d##e' t = 'e' should be true

//s run through: 
//1. we pop from our empty array for first 2 hashes
//2.we push a, b and c to our array, bringing our array to [a,b,c]
//3.We pop from our array twice for the next two hashes, bringing our array back to [a]
//4. We push d to our array, bringing our array to [a,d]
//5.We pop twice from our array for the next two hashes, making our array empty []
//6.We push e to our array, making it [e]

// t run through:
//1. We push e to our array, making it [e]

//We then run the join method on each array. The join() method creates and returns a new string by concatenating all of the elements in an array. 
//So, now we can properly compare the two strings. We can't compare whether the two arrays are equal. If we set them === to each other and they return true, we know 
//they are both equal when typed into empty text editors. If the if statement does not fire, we know they are not equal and we will return false. 