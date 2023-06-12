//2.13.23
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different
//day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit,
//return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


const maxProfit = prices =>{
    let minPrice = Number.MAX_SAFE_INTEGER
    let maxProfit = 0

    for(let i = 0; i < prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i]
        }
        if(prices[i] - minPrice > maxProfit){
            maxProfit = prices[i] - minPrice
        }
    }
     return maxProfit
}

//Explanation:
//We first set up a minPrice variable to be Number.Max_Safe_Integer, which represents the largest 
//representable value in JS's 'Number' type without losing precision. 
//We want 'minPrice' to start at the highest possible value so that it can be updated with lower 
//prices as we traverse the 'prices' array. 
//We also set up a 'maxProfit' variable to keep track of the greatest price increase from one day 
//and another. 
//We iterate through the prices array, with our first if statement checking to see if we have a 
//value less than our current minPrice value. This keep track of our lowest value. 
//We then have a second if statement. The second if statement checks to see if our current price 
//in the array minus the minimum price we have stored is greater than our maxProfit value. 
//If so, we will update our maxProfit.

//e.g prices = [7,3,9,15,6,4,1,8,10]
//Note, let's say we find a maxProfit value that is 12 because we had a minPrice of 3, and one 
//of the prices[i] values that came after it was 15 
//But, we get further along in the array and we find a new minPrice of 1, this would update our 
//minPrice. But, let's say the largest value that comes after it is 10. 
//That second if statement would never fire because 
//prices[i] - minPrice > maxProfit
//10        -       1   is not greater than 12, which is the stored maxProfit value from earlier on. 
