//Given the root of a binary tree, return the inorder traversal of its nodes' values.
//Input: root = [1,null,2,3]
//Output: [1,3,2]

function inorderTraversal(root){
  
  let stack = [];
  let nodes = [];
  let current = root;

  while(true){
    while(current){
      stack.push(current);
      current = current.left;
    }

    if(stack.length === 0){
      break;
    }

    let last = stack.pop();
    nodes.push(last.val);
    current = last.right;
  }

  return nodes;
}