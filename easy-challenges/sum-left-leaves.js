//404. Sum of Left Leaves
//Given the root of a binary tree, return the sum of all left leaves.
//Ex- Input: root = [3,9,20,null,null,15,7], Output: 24 (two left leaves - 9, 15)
//Ex- Input: root = [1], Output: 0

//traverse the tree
//have a running total
//if on left side at a leaf -> add node val

//Recursive
function sumOfLeftLeaves(root){
  if(root === null){
    return 0;
  } else if(root.left !== null && root.left.left === null && root.left.right === null){
    return root.left.val + sumOfLeftLeaves(root.right);
  } else {
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
  }
}

//Iterative
function sumOfLeft(root){
  const stack = [root];
  let sum = 0;
  while(stack.length){
    const node = stack.pop();
    if(node.left){
      if(!node.left.left && !node.left.right){
        sum += node.left.val;
      } else {
        stack.push(node.left);
      }
    }

    if(node.right){
      stack.push(node.right);
    }
  }
  return sum;
}

//Summary: Traversing the tree, sum up the left leaf nodes values. Recursively - if we are at a leaf node, return the value and recursive call of the right side. If we aren't at a leaf, keep going with the right subtree and the left subtree. Iteratively, if there is a node.left, check if it's a leaf node (no left or right children) and add it to the sum, or continue pushing onto the stack.