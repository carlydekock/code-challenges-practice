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

  //starting with buy price as first day
  let buyPrice = prices[0]; 
  let maxProfit = 0; 

  for(let i = 0; i < prices.length; i++){
    let currentDayPrice = prices[i];
    //if currentDay is less than buyPrice, reassign buyPrice
    if(currentDayPrice < buyPrice){
      buyPrice = currentDayPrice;
      //if maxProfit is less than the currentDay-buyPrice, reassign maxProfit
    } else if((currentDayPrice - buyPrice) > maxProfit){
      maxProfit = currentDayPrice - buyPrice;
    } 
  }

  return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));

//Summary: Starting with the first day as the buyPrice and maxProfit at 0, iterate through the array of prices, continuously calculating the currentDayPrice. If the currentDayPrice is less than the buyPrice, reassign buyPrice. And if the currentDayPrice - buyPrice is greater than the current maxProfit, reassign maxProfit. We'll iterate through the array only once, an return maxProfit at the end.
//Pattern: Sort of a sliding window, setting up the values for the first ones in the array, and a maxProfit of 0. If prices drop, reassign the buyPrice since we want to buy as low as we can. Calculate the maxProfit each day according to currentDayPrice - buyPrice, if its greater than the current maxProfit then update maxProfit to be the new value.
//Big O: O(n) iterating through the array one time, space: O(1) constant - storing buyPrice and maxProfit