//128. Longest Consecutive Sequence
//Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
//You must write an algorithm that runs in O(n) time.

function longestConsecutive(nums){
  let numSet = new Set(nums); //fills the set with nums right away, instead of iterating over to add them

  let longest = 0;
  for(let n in nums){
    if(!numSet.has(nums[n]-1)){
      let length = 0;
      while(numSet.has(nums[n] + length)){
        length++;
      }
      longest = Math.max(length, longest);
    }
  }
  return longest;
}

console.log(longestConsecutive([100,4,200,1,3,2]));

//Summary: Adding all the nums to a set, we can easily search for whether we have the number to the left of this current number, or whether this is the start of a sequence. If there is no number to the left, then it's the start of a sequence. Then, we want to continue while the numSet continues to have the next number, incrementing our length as we go. Our longest value will be the max of length and longest for each iteration. We'll return longest once we break out of the loop.
//Pattern: Using a set, and the idea that if we don't have the number right before the current number, then we're at the beginning of a sequence and we want to keep looking in the set for the next numbers. Tricks to keep in mind: visualizing the sequences on a number line, if there is nothing before, then we're at the beginning.