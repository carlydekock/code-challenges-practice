//Two Sum

//create object (hashtable) for containing key-value pairs of the element and index
// iterate through the array
// for the currentElement, compute the currentDiffference (difference of target - currentElement)
// if the currentDifference exists in the hashTable, return the index of the currentElement and currentDifference  

//LeetCode - Problem 1
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

function twoSum(nums, target){
  let numsIndex = new Map();
  let result = [];

  for(let i = 0; i < nums.length; i++){
    let currentNum = nums[i];
    let currentDifference = target - currentNum;

    if(numsIndex.has(currentDifference)){
      result[0] = numsIndex.get(currentDifference);
      result[1] = i;
      return result;
    }
    numsIndex.set(currentNum, i);
  }
}


console.log(twoSum([2,7,11,15], 9));

//Summary: Create a new map, of the currentNum and index. Iterate through the array of nums, continuously calculating the difference (target - currentNum). Check if the difference is in the map. If it is, return the value associated with that key in the map (index of that number) and the currentNum/index, and if it isn't, add the currentNum and index to the map. We are gauranteed to have one solution according to the problem, so no need to return outside of the for loop.
//Pattern: Hash map - checking for difference values, and adding the current value and index. 'currentNum': i are the key value pairs. This way, we can continuously calculate the difference we would need to reach the target at a current value, and see if we've encountered that value yet. 
//Big O: O(n), only iterating through the array of nums length n one time

