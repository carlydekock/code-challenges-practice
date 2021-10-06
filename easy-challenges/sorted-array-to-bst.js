//108. Convert Sorted Array to Binary Search Tree
//Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
//A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
//Ex- Input: nums = [-10,-3,0,5,9], Output: [0,-3,9,-10,null,5]

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function sortedArrayToBST(nums){

  if(nums === null || nums.length === 0){
    return null;
  }

  const mid = Math.floor((nums.length)/2);
  const root = new TreeNode(nums[mid]);
  root.left(sortedArrayToBST(nums.slice(0, mid)));
  root.right(sortedArrayToBST(nums.slice(mid+1)));
  return root; 
}

//Summary: To make a balanced BST from a sorted array, we know the middle element in the array will be our root. Then, we need to construct the left subtree from indexes 0 to mid-1, and the right subtree from indexes, mid+1 to nums.length-1. Our base case will be if nums === null || nums.length === 0, which will be once we've reached leaf nodes. Once we create the root, the left will be a recursive call to sortedArrayToBST from (0, mid-1), and the right will be sortedArrayToBST from (mid+1, nums.length-1). Then, we need to return the root.
//Pattern: BSTs and recursion. Once root is in place, recursively call to make the left and right subtrees. Base case is if nums === null or the length of the array (we've broken it down numerous times) is 0. 