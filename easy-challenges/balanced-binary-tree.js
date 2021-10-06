//110. Balanced Binary Tree
//Given a binary tree, determine if it is height-balanced.
//For this problem, a height-balanced binary tree is defined as:
//A binary tree in which the left and right subtrees of every node differ in height by no more than 1.

const getHeight = (node) => {
  if(node === null){
    return 0;
  }

  const left = getHeight(node.left);
  const right = getHeight(node.right);

  if(left === -1 || right === -1 || Math.abs(left - right) > 1){
    return -1; 
  }

  return Math.max(left, right) + 1;
};

function isBalanced(root){
  if(root === null){
    return true;
  }

  return getHeight(root) !== -1;
}

//Summary: Level by level, starting from the bottom and going up, we can recursively check the left and right subtrees. Comparing the heights of them. If we reach a subtree that has a difference in heights on the left and right side of greater than 1, then it is unbalanced. We need to return -1, and this will get passed up the levels of the tree. If we don't return -1, then we return the max of the left and right heights + 1 as we move up the levels of the tree.