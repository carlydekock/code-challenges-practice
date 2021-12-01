//78. Subsets
//Given an integer array nums of unique elements, return all possible subsets (the power set).
//The solution set must not contain duplicate subsets. Return the solution in any order.
//Ex 1: Input: nums = [1,2,3], Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
//Ex 2: Input: nums = [0], Output: [[],[0]]

function subsets(nums){
  const result = [];
  const subset = [];
  
  const dfs = (idx) => {
    if(idx >= nums.length){
      let copy = [...subset];
      result.push(copy);
      return;
    }

    subset.push(nums[idx]);
    dfs(idx + 1);

    subset.pop();
    dfs(idx + 1);
  };

  dfs(0);
  return result;
}

console.log(subsets([1,2,3]));

//Summary: At each index, we have a decision tree of whether to include the value or not. Starting at idx 1 we can either add [1], or not []. Then we continue down that path, for each [1] and [], we can either add 2 or not, which becomes [1,2]/[1], and [2]/[]... then we continue for 3. This gives us 2 options for every value in nums, or 2^3 = 8 options for subsets. 