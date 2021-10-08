//530. Minimum Absolute Difference in BST
//Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.
//Ex- Input: root = [4,2,6,1,3], Output: 1
//Ex- Input: root = [1,0,48,null,null,12,49], Output: 1

function inOrder(root){
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

function getMinDifference(root){
  const values = inOrder(root);
  let min = Number.MIN_SAFE_INTEGER;

  for(let i = 0; i < values.length-1; i++){
    min = Math.min(min, values[i+1]-values[i]);
  }

  return min;
}

//Summary: An inorder traversal will give us a sorted list of node values in the BST. Once we have that, we can iterate through the list comparing the current min, with the difference between the next two nodes in the list, keeping track of the overal min. 
//Pattern: Traversal, returning an array of values (inOrder traversal to give sorted values), then iterating through the array of values.