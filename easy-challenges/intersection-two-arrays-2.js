//Intersection of Two Arrays II
//Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
//Ex- Input: nums1 = [1,2,2,1], nums2 = [2,2], Output: [2,2]
//Ex- Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4], Output: [4,9] or [9,4]

//Initial ideas:
//Need to log which is in both arrays but the number of entries as well
//Could sort the arrays, and then compare with two pointers

function intersect(nums1, nums2){
  const count1 = {};
  const count2 = {};
  const result = [];

  for(let i = 0; i < nums1.length; i++){
    const currentNum = nums1[i];
    count1[currentNum] ? count1[currentNum]++ : count1[currentNum] = 1;
  }

  for(let i = 0; i < nums2.length; i++){
    const currentNum = nums2[i];
    count2[currentNum] ? count2[currentNum]++ : count2[currentNum] = 1;
  }

  for(let key in count1){
    if(count2[key]){
      let total = Math.min(count1[key], count2[key]);
      for(let i = 0; i < total; i++){
        result.push(parseInt(key));
      }
    }
  }

  return result;
}

console.log(intersect([1,2,2,1], [2,2]));
console.log(intersect([4,9,5], [9,4,9,8,4]));

//Summary: First part is to identify which numbers are repeats, and the second part to identify how many of the repeated number are in both arrays. Setting up a counter object for each nums array will give us a count, and then we can compare the two amounts for each key in common (for each number that exists in both arrays), and push the lower of the two counts (which array has the least occurences of the specific number in common) into the result array.
//Pattern: Two objects/hash maps to count occurences, and then a for loop for keys that occur in both maps to push the correct number of instances into the array.