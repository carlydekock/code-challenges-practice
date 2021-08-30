//Best Time to Buy and Sell Stock
//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
//Example - Input: prices = [7,1,5,3,6,4], Output: 5
//Example - Input: prices = [7,6,4,3,1], Output: 0

function maxProfit(prices){
  //edge case: no opportunity for two different days
  if(prices.length <= 1){
    return 0;
  }

  let buyPrice = prices[0];
  let maxProfit = 0;

  for(let i = 0; i < prices.length; i++){
    let currentDayPrice = prices[i];
    if(currentDayPrice < buyPrice){
      buyPrice = currentDayPrice;
    } else if((currentDayPrice - buyPrice) > maxProfit){
      maxProfit = currentDayPrice - buyPrice;
    } 
  }

  return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
