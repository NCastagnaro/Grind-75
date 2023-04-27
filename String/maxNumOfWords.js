//4.27.23
//Leetcode #2114 - Maximum Number of Words Found in Sentences - Easy 

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

 

// Example 1:

// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6
// Explanation: 
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.


//Solution: 
const mostWordsFound = sentences => {
    let maxVal
    let overallMax = 0;
    for(let i = 0; i < sentences.length; i++){
        maxVal = 1;
        for(let j = 0; j < sentences[i].length; j++){
            if(sentences[i][j] === ' ') maxVal++;
        }
        if(overallMax < maxVal) overallMax = maxVal
    }
    return overallMax
};


//Explanation:
//What was done was we initialized a "maxVal" variable which will account for the max number of words when we iterate through each index of the array.
//We initialize the maxVal to be 1 and every time we encounter a space, we increment by 1. 
//We then compare the overallMax val to that value for that index of the array. And if the number of words is greater for the index, it updates the overallMax value.
//We make sure to have the maxVal be reinitialized to 1 for each iteration so that way we can restart the comparison. Otherwise, maxVal would just increment throughout iterating through the indeces
//And it would not accurately reflect the specific number of words included for each index of the array.
//At the end, we return the overallMax val, which should represent the highest number of words in one of the indexes/sentences of the array. 

