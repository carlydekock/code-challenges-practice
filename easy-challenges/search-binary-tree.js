//700. Search in a Binary Search Tree
//You are given the root of a binary search tree (BST) and an integer val.
//Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
//Ex- Input: root = [4,2,7,1,3], val = 2, Output: [2,1,3]
//Ex- Input: root = [4,2,7,1,3], val = 5, Output: []

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function searchBST(root, val){
  if(root === null){
    return null;
  } else if(root.val === val){
    return root;
  } else if(val < root.val){
    return searchBST(root.left, val);
  } else if(val > root.val){
    return searchBST(root.right, val);
  }
}

function iterativeSearchBST(root, val){
  if(root === null){
    return null;
  }
  const stack = [root];
  while(stack.length){
    const node = stack.pop();
    if(node.val === val){
      return node;
    }
    if(node.val > val){
      if(node.left){
        stack.push(node.left);
      }
    } else {
      if(node.right){
        stack.push(node.right);
      }
    }
  }
  return null;
}

let tree = new Tree();
tree.root = new TreeNode(4);
tree.root.left = new TreeNode(2);
tree.root.left.left = new TreeNode(1);
tree.root.left.right = new TreeNode(3);
tree.root.right = new TreeNode(7);
console.log(searchBST(tree.root, 3)); //returns node
console.log(iterativeSearchBST(tree.root, 8)); //returns null

//Summary: Traverse the tree, as you visit a node, check to see if it is the same as the value. If it is, return the node. Otherwise, if the node value is less than the target value, visit the right side, if it's greater than the target value, visit the left side. Can do this recursively or iteratively with a stack.
//Pattern: Traversal of the tree, checking value against an input target value.