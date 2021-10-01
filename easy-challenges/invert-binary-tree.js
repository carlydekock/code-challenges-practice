//226. Invert Binary Tree
//Given the root of a binary tree, invert the tree, and return its root.
//Ex- Input: root=[4,2,7,1,3,6,9], Output: [4,7,2,9,6,3,1]
//Ex- Input: root = [2,1,3], Output: [2,3,1]
//Ex- Input: root = [], Output: []

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function invertTree(root){
  if(root === null){
    return root;
  }

  //Swap the L and R children
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}

let tree = new Tree();
tree.root = new TreeNode(4);
tree.root.left = new TreeNode(2);
tree.root.left.left = new TreeNode(1);
tree.root.left.right = new TreeNode(3);
tree.root.right = new TreeNode(7);
console.log(invertTree(tree.root));

//Summary: We need to swap all the child nodes in the binary tree. Starting from the root, swap the left and right children, and then recursively call on the left subtree and right subtree. Base case is if root === null (either no tree, or we've made it to leaf nodes), return the root. 
//Pattern: Recursion on left and right subtrees.
