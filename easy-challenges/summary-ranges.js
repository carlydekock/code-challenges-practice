//228. Summary Ranges
//You are given a sorted unique integer array nums.
//Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
//Each range [a,b] in the light should be output as:
//"a->b" if a != b
//"a" if a == b

function summaryRanges(nums){
  const ranges = [];
  const result = [];
  let index = 0;
  while(index < nums.length){
    let start = nums[index];
    let end = nums[index];
    while(nums[index+1] === nums[index] + 1){
      end = nums[index+1];
      index++;
    }
    ranges.push([start, end]);
    index++;
  }

  for(let i = 0; i < ranges.length; i++){
    if(ranges[i][0] === ranges[i][1]){ //no consecutive, values same
      result.push(ranges[i][0].toString());
    } else {
      let rangeStr = ranges[i][0].toString() + '->' + ranges[i][1].toString();
      result.push(rangeStr);
    }
  }
  return result;
}

console.log(summaryRanges([0,2,3,4,6,8,9]));
console.log(summaryRanges([0,1,2,4,5,7]));
console.log(summaryRanges([]));
console.log(summaryRanges([-1]));
console.log(summaryRanges([0]));

//Summary: We will need to traverse the array, checking if values are consecutive, if nums[index+1] === nums[index]+1. We can run one while loop while our index value is less than nums.length (to traverse the array), and run an inner while loop to run while the values are consecutive, incrementing the index each time until they are no longer consecutive and we break out. Keeping track of our starting value, once we break out of the loop we'll then know what our "ending" value of that range is. We can push the two into an array and then increment our index to keep moving. Once we have the array of ranges, we can run a loop over them to check whether the two values are equal (no consecutive) and we just need to push the value into our result, or whether they are different and we therefore have a range to push in ('2->5') for example. We can push those values into the result array, and then return that array.
//Pattern: While loop with pointers, and an auxilliary array to store the ranges which we can then turn into a string output.