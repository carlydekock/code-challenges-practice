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