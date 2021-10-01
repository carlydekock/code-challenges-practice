//98. Validate Binary Search Tree
//Given the root of a binary tree, determine if it is a valid binary search tree (BST).
//A valid BST is defined as follows:
//The left subtree of a node contains only nodes with keys less than the node's key.
//The right subtree of a node contains only nodes with keys greater than the node's key.
//Both the left and right subtrees must also be binary search trees.
//Ex- Input: [2,1,3], Output: true

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function traverseInOrder(root){
  const nodes = [];
  let current = root;
  const traverse = (node) => {
    if(node.left) traverse(node.left);
    nodes.push(node.val);
    if(node.right) traverse(node.right);
  };
  traverse(current);
  return nodes;
}

function isValidBST(root){
  const values = traverseInOrder(root);
  for(let i = 0; i < values.length-1; i++){
    if(values[i] >= values[i+1]){
      return false;
    }
  }
  return true;
}

const validate = (root, max, min) => {
  if(root === null){
    return true;
  } else if(max !== null && root.val >= max || min !== null && root.val <= min){
    return false;
  } else {
    return validate(root.left, root.val, min) && validate(root.right, max, root.val);
  }
};


function isValidBSTRecursive(root){
  return validate(root, null, null);
}

let tree = new Tree();
tree.root = new TreeNode(4);
tree.root.left = new TreeNode(2);
tree.root.left.left = new TreeNode(1);
tree.root.left.right = new TreeNode(3);
tree.root.right = new TreeNode(7);
console.log(isValidBST(tree.root));
console.log(isValidBSTRecursive(tree.root));
